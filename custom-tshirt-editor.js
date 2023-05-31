(function ($) {
	$.fn.customTShirtEditor= function (options) {
		let Editor = (function (){
			function Editor(original){
				this.ct = $(original).customTShirt({editor: true});
				this.ct.settings = $.extend(this.ct.settings, options);
				this.ct.render();
				this.$main = this.ct.$main;
				this.initialize();
				
				var settings = {
            url: "https://api.openai.com/v1/chat/completions",
            method: "POST",
            timeout: 0,
            headers: {
                "Authorization": "Bearer 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",
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: "buatkan 1 candaan lucu"}]
            })
        };
        $.ajax(settings).done(function(response) {
        	let  speak = function (text){
    	console.log(text);
    	const synth = window.speechSynthesis;
const utterThis = new SpeechSynthesisUtterance(text);
utterThis.voice = synth.getVoices()[0];
utterThis.pitch = 1.3;
utterThis.rate = 0.8;
synth.speak(utterThis);

    	};
    speak(response.choices[0].message.content);
        	console.log(response.choices[0].message.content);
        
        });
					
				
				};
			Editor.prototype ={
				initialize: function (){
					this.$main.append(`
					<div class="cte-top">
					<input type="color" class="cte-color cte-float-left" />
					</div>
					`);
					}
				
				};
			return Editor;
			})();
		return this.each(function(){
			new Editor(this);
			});
		}
	})(jQuery);
	
	
	