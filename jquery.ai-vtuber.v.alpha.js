(function ($) {
	$.fn.AIVtuber = function (options) {
		let line = [];
		let settings = $.extend({
			key: `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`,
			width: 640,
			height: 360,
			avatar: {
				src: ["img/1.png", "img/3.png", "img/4.png"],
				width: 200,
				height: 200,
				posX: 100,
				posY: 280,
				pitch: 1.7,
				rate: 1.2,
				},
			intro: ["Halo masyarakat ekonomi lemah", "yang kalo makan masih pake tangan", "apakabar"],
			}, options);
		let Avatar = (function (){
			function Avatar (original){
				this.SI = null;
				this.$original = $(original);
				this.$avatar = $(`<div />`);
				this.initialize();
				this.breathe();
				this.idle();
				}
			Avatar.prototype ={
				initialize: function (){
					let avatar = this;
					this.$original.addClass("ai-canvas").css({width: `${settings.width}px`, height: `${settings.height}px`});
					this.$avatar.addClass("ai-avatar").css({top: `${settings.avatar.posY}px`, left: `${settings.avatar.posX}px`}).appendTo(this.$original);
					$.each(settings.avatar.src, function (i, v){
						$(`<div />`).addClass("ai-avatar-img").css({width: `${settings.avatar.width}px`, height: `${settings.avatar.height}px`, left: `-${settings.avatar.width/2}px`, top: `-${settings.avatar.height/2}px`, backgroundImage: `url('${v}')`}).hide().appendTo(avatar.$avatar);
						});
					},
				breathe: function (){
					let avatar = this;
					let animatePoint = 0;
					let animateUp = true;
					this.$avatar.children().hide();
					this.$avatar.children().eq(0).show();
					setInterval(function (){
						if(animateUp){
							animatePoint += 1;
							avatar.$avatar.children().css({left: `-${settings.avatar.width/2}px`, top: `-${(settings.avatar.height/2)+animatePoint}px`});
							if(animatePoint == 3){
								animateUp = false;
								}
							}
						else{
							animatePoint -= 1;
							avatar.$avatar.children().css({left: `-${settings.avatar.width/2}px`, top: `-${(settings.avatar.height/2)+animatePoint}px`});
							if(animatePoint == -3){
								animateUp = true;
								}
							}
						}, 300);
					},
				idle: function (){
					clearInterval(this.SI);
					let avatar = this;
					this.$avatar.children().hide();
					this.$avatar.children().eq(0).show();
					clearInterval(this.SI);
					this.SI = setInterval(function (){
						avatar.$avatar.children().hide();
						avatar.$avatar.children().eq(2).show();
						setTimeout(function (){
							avatar.$avatar.children().hide();
						avatar.$avatar.children().eq(0).show();
							}, 200);
						}, 4800);
					},
				speak: function (){
					clearInterval(this.SI);
					let avatar = this;
					this.$avatar.children().hide();
					this.$avatar.children().eq(1).show();
					
					}
				}
			return Avatar;
			})();
		let Synthesis = (function (){
			function Synthesis(avatar){
				this.avatar = avatar;
				this.synth = window.speechSynthesis;
				this.utter = new SpeechSynthesisUtterance();
				this.initialize();
				}
			Synthesis.prototype = {
				initialize: function (){
					let synthesis = this;
					let avatar = this.avatar;
					this.utter.voice = this.synth.getVoices()[0];
					this.utter.pitch = settings.avatar.pitch;
					this.utter.rate = settings.avatar.rate;
					this.utter.volume = 2;
					this.utter.onstart = function (event){
						avatar.speak();
						}
					this.utter.onerror = function (event){
						console.log("erorr");
						}
					this.utter.onend = function (event){
						avatar.idle();
						}
					},
				speak: function (text){
					this.utter.text = text;
					this.synth.speak(this.utter);
					}
				}
			return Synthesis;
			})();
		let OpenAI = (function (){
			function OpenAI(synthesis){
				this.synthesis = synthesis;
				this.key = settings.key;
				}
			OpenAI.prototype = {
				chat: function (ask){
					let synthesis = this.synthesis;
					var setting = {
						url: "https://api.openai.com/v1/chat/completions",
						method: "POST",
						timeout: 0,
						headers: {"Authorization": `Bearer ${settings.key}`, "Content-Type": "application/json"},
						data: JSON.stringify({
							model: "gpt-3.5-turbo",
							messages: [{role: "user", content: `${ask}`}]
							})
						};
						$.ajax(setting).done(function(response) {
							synthesis.speak(response.choices[0].message.content);
							});
					}
				}
			return OpenAI;
			})();
		let Script = (function (){
			function Script(avatar, synthesis, openAI){
				let script = this;
				this.avatar = avatar;
				this.synthesis = synthesis;
				this.openAI = openAI;
				this.initialize();
				
				}
			Script.prototype = {
				line: [],
				lineNumber: 0,
				number: 0,
				introNumber: 0,
				chatNumber: 0,
				chat: [],
				initialize: function (){
					script = this;
					$.each(settings.intro, function (i,v){
						line.push(v);
						});
					setInterval(function (){
						var setting = {
						url: "chat.json",
						method: "GET",
						timeout: 0,
						
						};
						$.ajax(setting).done(function(response) {
							script.chat = JSON.parse(response);
							});
						}, 3000);
					},
				
				run: function (){
					script = this;
					synthesis = this.synthesis;
					avatar = this.avatar;
					openAI = this.openAI;
					let chat = function (){
						if(script.chat[script.chatNumber] != undefined){
							synthesis.speak(`dari ${script.chat[script.chatNumber].name}, ${script.chat[script.chatNumber].message}`);
							synthesis.utter.onend = function (){
								avatar.idle();
								openAI.chat(`${script.chat[script.chatNumber].message}`);
								}
							}
						}
					let intro = function (){
						if(settings.intro[script.introNumber] != undefined){
							synthesis.speak(settings.intro[script.introNumber]);
							synthesis.utter.onend = function (){
								avatar.idle();
								setTimeout(function (){
									script.introNumber += 1;
									intro();
									}, 300);
								}
							}
						else{
							
								chat();
								}
						}
					intro();
					}
				}
			return Script;
			})();
		
		return this.each(function (){
			let avatar = new Avatar (this);
			let synthesis = new Synthesis(avatar);
			let openAI = new OpenAI(synthesis);
			let script = new Script(avatar, synthesis, openAI);
			$(`#speak`).on("click", function (){
				script.run();
				});
			});
    };
})(jQuery);
