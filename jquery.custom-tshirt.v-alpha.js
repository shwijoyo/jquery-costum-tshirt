(function ($) {
	$.fn.customTShirt = function (options) {
		let text = {
						type: "text",
						top: 700, // 0-1000
						left: 580, //0-1000
						transform: {
							rotateX: 0, // -90 - 90
							rotateY: 0 // -90 - 90
							},
						child: {
							html: "1234567",
							borderBottom: false,
							textAlign: `center`,
							letterSpacing: 0, //-20-200
							lineHeight: 100, // 50-300
							opacity: 1, // 0-1 point 0.x
							font: {
								size: 50, // 0-500
								source: `https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap`,
								family: `Abril Fatface`,
								weight: "bold",
								style: "none"
								},
							
							backgroundImage: {
								type: 0,// 0 - 4
								url: "https://media.istockphoto.com/id/1205141343/id/vektor/pola-mulus-dengan-ornamen-geometris-simetris-latar-belakang-abstrak-yang-cerah.jpg?s=612x612&w=0&k=20&c=6C4vTOxu2RBtw5zQ78JFltOyWM-WmhHRixP7S3e7OFs=",
								color: ["#ff0000", "#0000ff"],
								natural: {
									exist: true,
									width: 1280,
									height: 1920,
									},
								linear: {
									pos: 20, // -180 - 180
									},
								radial: {
									posX: 0, // 0 - 100
									posY: 0, // 0 - 100
									}
									
								},
							backgroundSize: {
								width: 100, // 0-100
								height: 100, // 0-100
								},
							transform: {
								rotate: 0, // -180 - 180
								skew: 0, // -88 - 88
								scaleX: 1, // -1 and 1
								scaleY: 1, // -1 and 1
								},
							filter: {
								main: "grayscale(100)",
								color: {
									exist: false,
									main: "#ff0000"
									},
								stroke: {
									width: 25, // 0-35
									color: "#ff0000"
									},
								outline: {
									width: 0, // 0-35
									color: "#000000"
									},
								depth: {
									type: 0, // 0-7
									width: 0, // 0-15
									color: "#000000"
									},
								shadow: {
									blur: 0, // 0-15
									color: "#ff0000",
									posX: 0, // -350-350
									posY: 0 // -350-350
									},
								},
							curve: {
								type: 0, // 0-5
								round: 10, // 0-80
								degree: 60 // 0-180
								}
							}
						};
		let image = {
						type: "image",
						top: 300, // 0-1000
						left: 380, //0-1000
						transform: {
							rotateX: 0, // -90 - 90
							rotateY: 0 // -90 - 90
							},
						child: {
							width: 300, // 0-1000
							height: 250, // 0-1000
							opacity: 1, // 0-1 point 0.x
							backgroundImage: {
								type: 0,// 0 - 4
								url: "https://media.istockphoto.com/id/1205141343/id/vektor/pola-mulus-dengan-ornamen-geometris-simetris-latar-belakang-abstrak-yang-cerah.jpg?s=612x612&w=0&k=20&c=6C4vTOxu2RBtw5zQ78JFltOyWM-WmhHRixP7S3e7OFs=",
								color: ["#ff0000", "#0000ff"],
								natural: {
									exist: true,
									width: 1280,
									height: 1920,
									},
								linear: {
									pos: 20, // -180 - 180
									},
								radial: {
									posX: 20, // 0 - 100
									posY: 20, // 0 - 100
									}
									
								},
							transform: {
								rotate: 0, // -180 - 180
								skew: 0, // -88 - 88
								scaleX: 1, // -1 and 1
								scaleY: 1, // -1 and 1
								},
							filter: {
								main: "",
								color: {
									exist: false,
									main: "#ff0000"
									},
								stroke: {
									width: 0, // 0-35
									color: "#ffffff"
									},
								outline: {
									width: 0, // 0-35
									color: "#000000"
									},
								depth: {
									type: 0, // 0-7
									width: 10, // 0-15
									color: "#000000"
									},
								shadow: {
									blur: 0, // 0-15
									color: "#ff0000",
									posX: 0, // -350-350
									posY: 0 // -350-350
									},
								},
							borderRadius: {
								posW: 0, // 0 - 100
								posX: 0, // 0 - 100
								posY: 0, // 0 - 100
								posZ: 0, // 0 - 100
								},
							}
						};
					
		let settings = $.extend({
			editor: false,
			onSave: function (data){},
			data: {
				key: 0,
				mockup: true,
				color: "#00ffff",
				canvas: [
				{
					name: "front",
					key: -1,
					image: {
						bottom: "https://i.ibb.co/vvDg7QK/db.png",
						top: "https://i.ibb.co/mXFPKLQ/dt.png",
						},
					layer: [
					
					]
					},
				{
					name: "back",
					image: {
						bottom: "https://i.ibb.co/ZhQ9DmM/tshirt-belakang-min.jpg",
						top: "https://i.ibb.co/47P3zWX/tshirt-belakang.png",
						},
					layer: []
					}
				]
				}
			}, options);
		let Canvas = (function (){
			function Canvas(original){
				this.$original = $(original);
				this.$main = $(`<div />`);
				this.$wrap = $(`<div />`);
				this.$canvas = $(`<div />`);
				this.$color = $(`<div />`);
				this.$layers = $(`<div />`);
				this.$imageBottom = $(`<div />`);
				this.$imageTop = $(`<div />`);
				this.initialize();
				this.render();
				
				}
			Canvas.prototype = {
				initialize: function (){
					this.$main.css({position: `relative`, overflow: `hidden`, width: `${this.$original.width()}px`, height: `${this.$original.width()}px`}).appendTo(this.$original);
					this.$wrap.css({position: `absolute`, fontSize: `1000px`, top: `${Number(this.$original.width() / 1000) <= 1 ? "-" + Number((1 - Number(this.$original.width() / 1000)) / 2) : Number((1 - Number(this.$original.width() / 1000)) / 2) * -1}em`, left: `${Number(this.$original.width() / 1000) <= 1 ? "-" + Number((1 - Number(this.$original.width() / 1000)) / 2) : Number((1 - Number(this.$original.width() / 1000)) / 2) * -1}em`, width: `1000px`, height: `1000px`, transform: `scale(${this.$original.width()/1000})`}).appendTo(this.$main);
					this.$canvas.css({position: `absolute`, fontSize: `1000px`, width: `1000px`, height: `1000px`}).append(this.$color).append(this.$layers.css({perspective: `1000px`})).append(this.$imageBottom.css({mixBlendMode: `multiply`})).append(this.$imageTop).appendTo(this.$wrap).children("div").css({position: `absolute`, top: `0px`, left: `0px`, right: `0px`, bottom: `0px`, backgroundRepeat: `no-repeat`, backgroundPosition: `center center`, backgroundSize: `100% 100%`});
					
					},
				
				mockup: function (){
					if(settings.data.mockup){
						this.$color.show();
						this.$imageBottom.show();
						this.$imageTop.show();
						}
					else{
						this.$color.hide();
						this.$imageBottom.hide();
						this.$imageTop.hide();
						}
					},
				color: function (){
					this.$color.css({backgroundColor: settings.data.color});
					},
				image: function (){
					this.$imageBottom.css({backgroundImage: `url(${settings.data.canvas[settings.data.key].image.bottom})`});
					this.$imageTop.css({backgroundImage: `url(${settings.data.canvas[settings.data.key].image.top})`});
					},
				layers: function (){
					let canvas = this;
					this.$layers.empty();
					$.each(settings.data.canvas[settings.data.key].layer, function (i, v){
						canvas.$layers.append(`<div><div></div></div>`);
						canvas.layer(i);
						});
					},
				layer: function (n){
					let canvas = this;
					let $layer = this.$layers.children().eq(n);
					let filterLine = function (line){
						let stroke = ``;
						let outline = ``;
                        $.each([{ x: "-", y: "-" },{ x: "", y: "" },{ x: "", y: "-" },{ x: "-", y: "" }], function (i, v){
                        	stroke += `drop-shadow(${v.x}${(settings.data.canvas[settings.data.key].layer[n].child.filter.stroke.width / 1000).toFixed(3)}em ${v.y}${(settings.data.canvas[settings.data.key].layer[n].child.filter.stroke.width / 1000).toFixed(3)}em 0em ${settings.data.canvas[settings.data.key].layer[n].child.filter.stroke.color}) `;
                        outline += `drop-shadow(${v.x}${(settings.data.canvas[settings.data.key].layer[n].child.filter.outline.width / 1000).toFixed(3)}em ${v.y}${(settings.data.canvas[settings.data.key].layer[n].child.filter.outline.width / 1000).toFixed(3)}em 0em ${settings.data.canvas[settings.data.key].layer[n].child.filter.outline.color}) `;
                        });
                        stroke = `${settings.data.canvas[settings.data.key].layer[n].child.filter.stroke.width != 0 ? stroke : ""}`;
                        outline = `${settings.data.canvas[settings.data.key].layer[n].child.filter.outline.width != 0 ? outline : ""}`;
                        return (line=="stroke")?stroke:outline;
						};
					let filterDepth = function (){
						let depth = ``;
						let pointer = [{ x: -1, y: -1 },{ x: 0, y: -1 },{ x: 1, y: -1 },{ x: 1, y: 0 },{ x: 1, y: 1 },{ x: 0, y: 1 },{ x: -1, y: 1 },{ x: -1, y: 0 }];
                        for(let i = 0; i<=settings.data.canvas[settings.data.key].layer[n].child.filter.depth.width;i++){
                        	depth += `drop-shadow(${pointer[settings.data.canvas[settings.data.key].layer[n].child.filter.depth.type].x * i * 0.01}em ${pointer[settings.data.canvas[settings.data.key].layer[n].child.filter.depth.type].y * i * 0.01}em ${i == 0 ? "1px" : "0em"}${settings.data.canvas[settings.data.key].layer[n].child.filter.depth.color})`;
                        };
                        depth = `${settings.data.canvas[settings.data.key].layer[n].child.filter.depth.width != 0 ? depth : ""}`;
                        return depth;
						};
					let filterShadow = function (){
						return `${settings.data.canvas[settings.data.key].layer[n].child.filter.shadow.blur == 0 && settings.data.canvas[settings.data.key].layer[n].child.filter.shadow.posY == 0 && settings.data.canvas[settings.data.key].layer[n].child.filter.shadow.posY == 0? ``: `drop-shadow(${(settings.data.canvas[settings.data.key].layer[n].child.filter.shadow.posX / 100).toFixed(3)}em ${(settings.data.canvas[settings.data.key].layer[n].child.filter.shadow.posY / 100).toFixed(3)}em ${(settings.data.canvas[settings.data.key].layer[n].child.filter.shadow.blur / 100).toFixed(3)}em ${settings.data.canvas[settings.data.key].layer[n].child.filter.shadow.color}`}`;
						};
					let backgroundImageColor = function (){
						let basic = settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.color[settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.color.length - 1];
                        let color = `linear-gradient(0deg, ${basic}, ${basic})`;
                        let gradient = `${basic}, ${basic}`;
                        if (settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.color.length > 1) {
                            gradient = ``;
                            $.each(settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.color, function (i, v){
                            	gradient += `${v},`;
                            	});
                            gradient = gradient.substring(0, gradient.length - 1);
                        }
                        switch (settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.type) {
                            case 0:
                                settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.color = [`${basic}`];
                                color = ``;
                                break;
                            case 1:
                                settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.color = [`${basic}`];
                                color = `, ${color}`;
                                break;
                            case 2:
                                color = `, linear-gradient(${settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.linear.pos}deg, ${gradient})`;
                                break;
                            case 3:
                                color = `, radial-gradient(circle at ${settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.radial.posX}% ${settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.radial.posY}%, ${gradient})`;
                                break;
                            case 4:
                                settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.color = [`${settings.data.color}`];
                                color = `, linear-gradient(0deg, ${settings.data.color}, ${settings.data.color})`;
                                break;
                        }
                        return color;
                    };
                    
						
						
					if(settings.data.canvas[settings.data.key].layer[n].type == "image"){
						if(settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.natural.exist){
							settings.data.canvas[settings.data.key].layer[n].child.height = (settings.data.canvas[settings.data.key].layer[n].child.width*settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.natural.height)/settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.natural.width;
							}
						$layer.attr(`style`, ``).css({
							position: `absolute`, 
							top: `${settings.data.canvas[settings.data.key].layer[n].top}px`, 
							left: `${settings.data.canvas[settings.data.key].layer[n].left}px`, 
							transformStyle: `preserve-3d`,
							width: `0px`,
							height: `0px`,
							transform: `rotateX(${settings.data.canvas[settings.data.key].layer[n].transform.rotateX}deg) rotateY(${settings.data.canvas[settings.data.key].layer[n].transform.rotateY}deg)`
							}).children().attr(`style`, ``).css({
								position: `absolute`,
								backgroundRepeat: `no-repeat`,
								backgroundPosition: `center center`,
								backgroundSize: `100% 100%`,
								opacity: `${settings.data.canvas[settings.data.key].layer[n].child.opacity}`,
								fontSize: `${settings.data.canvas[settings.data.key].layer[n].child.width}px`,
								top: `-${settings.data.canvas[settings.data.key].layer[n].child.height/2}px`, 
								left: `-${settings.data.canvas[settings.data.key].layer[n].child.width/2}px`, 
								width: `${settings.data.canvas[settings.data.key].layer[n].child.width}px`, 
								height: `${settings.data.canvas[settings.data.key].layer[n].child.height}px`,
								backgroundImage: `url('${settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.url}') ${backgroundImageColor()}`,
								transform: `rotate(${settings.data.canvas[settings.data.key].layer[n].child.transform.rotate}deg) skew(${settings.data.canvas[settings.data.key].layer[n].child.transform.skew}deg) scaleX(${settings.data.canvas[settings.data.key].layer[n].child.transform.scaleX}) scaleY(${settings.data.canvas[settings.data.key].layer[n].child.transform.scaleY})`,
								filter: `${settings.data.canvas[settings.data.key].layer[n].child.filter.color.exist? `opacity(0.9) grayscale(100%) drop-shadow(0em 0em 0em ${settings.data.canvas[settings.data.key].layer[n].child.filter.color.main}) saturate(100)`:``} ${settings.data.canvas[settings.data.key].layer[n].child.filter.main} ${filterLine('stroke')} ${filterLine('outline')} ${filterDepth()} ${filterShadow()}`,
								borderRadius: `${settings.data.canvas[settings.data.key].layer[n].child.borderRadius.posW}% ${settings.data.canvas[settings.data.key].layer[n].child.borderRadius.posX}% ${settings.data.canvas[settings.data.key].layer[n].child.borderRadius.posY}% ${settings.data.canvas[settings.data.key].layer[n].child.borderRadius.posZ}%`,
								});
						}
					else if(settings.data.canvas[settings.data.key].layer[n].type == "text"){
						$(`<link />`).attr({href:`${settings.data.canvas[settings.data.key].layer[n].child.font.source}`, rel: `stylesheet`}).appendTo($("head"));
						let $children = $layer.attr(`style`, ``).css({
							position: `absolute`, 
							top: `${settings.data.canvas[settings.data.key].layer[n].top}px`, 
							left: `${settings.data.canvas[settings.data.key].layer[n].left}px`, 
							transform: `rotateX(${settings.data.canvas[settings.data.key].layer[n].transform.rotateX}deg) rotateY(${settings.data.canvas[settings.data.key].layer[n].transform.rotateY}deg)`,
							transformStyle: `preserve-3d`,
							width: `0px`,
							height: `0px`,
							}).children().attr(`style`, ``);
						if(settings.data.canvas[settings.data.key].layer[n].child.curve.type == 0){
							$children.css({
								position: `absolute`,
								backgroundRepeat: `repeat`,
								backgroundPosition: `center center`,
								backgroundSize: `${settings.data.canvas[settings.data.key].layer[n].child.backgroundSize.width}% ${settings.data.canvas[settings.data.key].layer[n].child.backgroundSize.height}%`,
								whiteSpace: `nowrap`,
								webkitBackgroundClip: `text`,
								webkitTextFillColor: `transparent`,
								backgroundClip: `text`,
								color: `transparent`,
								padding: `0.26em`,
								opacity: `${settings.data.canvas[settings.data.key].layer[n].child.opacity}`,
								lineHeight: `${(settings.data.canvas[settings.data.key].layer[n].child.lineHeight / 100).toFixed(2)}em`,
								letterSpacing: `${(settings.data.canvas[settings.data.key].layer[n].child.letterSpacing / 100).toFixed(2)}em`,
								backgroundImage: `url('${settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.url}') ${backgroundImageColor()}`,
								fontSize: `${settings.data.canvas[settings.data.key].layer[n].child.font.size}px`,
								fontFamily: `${settings.data.canvas[settings.data.key].layer[n].child.font.family}`,
								fontWeight: `${settings.data.canvas[settings.data.key].layer[n].child.font.weight}`,
								fontStyle: `${settings.data.canvas[settings.data.key].layer[n].child.font.style}`,
								textStroke: `${(settings.data.canvas[settings.data.key].layer[n].child.filter.stroke.width / 1000).toFixed(3)}em ${settings.data.canvas[settings.data.key].layer[n].child.filter.stroke.color}`,
								textAlign: `${settings.data.canvas[settings.data.key].layer[n].child.textAlign}`,
								transform: `rotate(${settings.data.canvas[settings.data.key].layer[n].child.transform.rotate}deg) skew(${settings.data.canvas[settings.data.key].layer[n].child.transform.skew}deg) scaleX(${settings.data.canvas[settings.data.key].layer[n].child.transform.scaleX}) scaleY(${settings.data.canvas[settings.data.key].layer[n].child.transform.scaleY})`,
								filter: `${settings.data.canvas[settings.data.key].layer[n].child.filter.color.exist? `opacity(0.9) grayscale(100%) drop-shadow(0em 0em 0em ${settings.data.canvas[settings.data.key].layer[n].child.filter.color.main}) saturate(100)`:``} ${settings.data.canvas[settings.data.key].layer[n].child.filter.main} ${filterLine('outline')} ${filterDepth()} ${filterShadow()}`,
								borderBottom: `${(settings.data.canvas[settings.data.key].layer[n].child.borderBottom)?`0.1em solid ${settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.color[settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.color.length - 1]}`:`none`}`,
								}).html(String(decodeURIComponent(settings.data.canvas[settings.data.key].layer[n].child.html)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\n/g, "<br>")).css({top: `-${$layer.children().outerHeight()/2}px`,left: `-${$layer.children().outerWidth()/2}px`,});
							}
							else{
								$children.css({
									position: `absolute`,
									width: `${settings.data.canvas[settings.data.key].layer[n].child.font.size}px`,
									height: `${settings.data.canvas[settings.data.key].layer[n].child.font.size}px`,
									transform: `rotate(${settings.data.canvas[settings.data.key].layer[n].child.transform.rotate}deg) skew(${settings.data.canvas[settings.data.key].layer[n].child.transform.skew}deg) scaleX(${settings.data.canvas[settings.data.key].layer[n].child.transform.scaleX}) scaleY(${settings.data.canvas[settings.data.key].layer[n].child.transform.scaleY})`,
									top: `-${settings.data.canvas[settings.data.key].layer[n].child.font.size/2}px`,
									left: `-${settings.data.canvas[settings.data.key].layer[n].child.font.size/2}px`,
									});
								let text = JSON.stringify(decodeURIComponent(settings.data.canvas[settings.data.key].layer[n].child.html).split(""));
								let curve = {
									text: {start: JSON.parse(`${text}`).splice(0, JSON.parse(`${text}`).length % 2 == 1 ? JSON.parse(`${text}`).length / 2 - 0.5 : JSON.parse(`${text}`).length / 2).reverse(),
									middle: JSON.parse(`${text}`).length % 2 == 1 ? JSON.parse(`${text}`)[JSON.parse(`${text}`).length / 2 - 0.5] : "",
									end: JSON.parse(`${text}`).splice(JSON.parse(`${text}`).length % 2 == 1 ? JSON.parse(`${text}`).length / 2 + 0.5 : JSON.parse(`${text}`).length / 2, JSON.parse(`${text}`).length - 1),
									},
									data: {
										type: settings.data.canvas[settings.data.key].layer[n].child.curve.type - 1,
										round: settings.data.canvas[settings.data.key].layer[n].child.curve.round,
										degree: settings.data.canvas[settings.data.key].layer[n].child.curve.degree,
										},
									pointer: [{ rs: "-", re: "", ps: "bottom", pe: "top", rps: "", rpe: "-" },{ rs: "", re: "-", ps: "top", pe: "bottom", rps: "-", rpe: "" },{ rs: "-", re: "", ps: "bottom", pe: "top", rps: "", rpe: "-" },{ rs: "", re: "-", ps: "top", pe: "bottom", rps: "-", rpe: "" }]
									};
								let separator = JSON.parse(`${text}`).length % 2 == 1 ? curve.data.degree / curve.text.start.length : (curve.data.degree * 2) / (curve.text.start.length * 2 - 1);
								let rs = function (i){
									let pointer = curve.pointer[curve.data.type].rs;
									let rotate = JSON.parse(`${text}`).length % 2 == 1 ? (i + 1) * separator : (i + 1) * separator - separator / 2;
									return pointer + rotate;
									};
								let rps = (i) => {
									let pointer = curve.pointer[curve.data.type].rps;
									let rotate = curve.data.type == 2 || curve.data.type == 3 ? (JSON.parse(`${text}`).length % 2 == 1 ? (i + 1) * separator : (i + 1) * separator - separator / 2) : "0";
									return pointer + rotate;
									};
								let re = (i) => {
									let pointer = curve.pointer[curve.data.type].re;
									let rotate = JSON.parse(`${text}`).length % 2 == 1 ? (i + 1) * separator : (i + 1) * separator - separator / 2;
									return pointer + rotate;
									};
								let rpe = (i) => {
									let pointer = curve.pointer[curve.data.type].rpe;
									let rotate = curve.data.type == 2 || curve.data.type == 3 ? (JSON.parse(`${text}`).length % 2 == 1 ? (i + 1) * separator : (i + 1) * separator - separator / 2) : "0";
									return pointer + rotate;
									};
								let el = function (r, rp, v){
									let $div1 = $(`<div />`).css({
										position: `absolute`,
										width: `${settings.data.canvas[settings.data.key].layer[n].child.font.size}px`,
										height: `${settings.data.canvas[settings.data.key].layer[n].child.font.size}px`,
										top: `0px`,
										left: `0px`,
										transform: `rotate(${r}deg)`}).appendTo($children);
									let $div2 = $(`<div />`).css({
										position: `absolute`,
										width: `${settings.data.canvas[settings.data.key].layer[n].child.font.size}px`,
										height: `${Number(curve.data.round / 100).toFixed(3)}em`,
										left: `0px`,
										}).css(curve.pointer[curve.data.type].ps, "0px").appendTo($div1);
									let $div3 = $(`<div />`).css({
										position: `absolute`,
										width: `${settings.data.canvas[settings.data.key].layer[n].child.font.size}px`,
										height: `${settings.data.canvas[settings.data.key].layer[n].child.font.size}px`,
										left: `-0.26em`,
										transform: `rotate(${rp}deg)`,
										backgroundRepeat: `repeat`,
										backgroundPosition: `center center`,
										backgroundSize: `${settings.data.canvas[settings.data.key].layer[n].child.backgroundSize.width}% ${settings.data.canvas[settings.data.key].layer[n].child.backgroundSize.height}%`,
										whiteSpace: `nowrap`,
										webkitBackgroundClip: `text`,
										webkitTextFillColor: `transparent`,
										backgroundClip: `text`,
										color: `transparent`,
										padding: `0.26em`,
										opacity: `${settings.data.canvas[settings.data.key].layer[n].child.opacity}`,
										backgroundImage: `url('${settings.data.canvas[settings.data.key].layer[n].child.backgroundImage.url}') ${backgroundImageColor()}`,
										fontSize: `${settings.data.canvas[settings.data.key].layer[n].child.font.size}px`,
										fontFamily: `${settings.data.canvas[settings.data.key].layer[n].child.font.family}`,
										fontWeight: `${settings.data.canvas[settings.data.key].layer[n].child.font.weight}`,
										fontStyle: `${settings.data.canvas[settings.data.key].layer[n].child.font.style}`,
										textStroke: `${(settings.data.canvas[settings.data.key].layer[n].child.filter.stroke.width / 1000).toFixed(3)}em ${settings.data.canvas[settings.data.key].layer[n].child.filter.stroke.color}`,
										textAlign: `${settings.data.canvas[settings.data.key].layer[n].child.textAlign}`,
										filter: `${settings.data.canvas[settings.data.key].layer[n].child.filter.color.exist? `opacity(0.9) grayscale(100%) drop-shadow(0em 0em 0em ${settings.data.canvas[settings.data.key].layer[n].child.filter.color.main}) saturate(100)`:``} ${settings.data.canvas[settings.data.key].layer[n].child.filter.main} ${filterLine('outline')} ${filterDepth()} ${filterShadow()}`,
										}).css(curve.pointer[curve.data.type].pe, "-0.26em").html(v).appendTo($div2);
									}
								$.each(curve.text.start, function (i, v) {
									el(rs(i), rps(i), v);
									});
								el(0, 0, curve.text.middle);
								$.each(curve.text.end, function (i, v) {
									el(re(i), rpe(i), v);
									});
								}
						}
					
					},
				render: function (){
					this.mockup();
					this.color();
					this.image();
					this.layers();
					}
				}
			return Canvas;
		})();
		let Editor = (function (){
			function Editor(canvas){
				this.canvas = canvas;
				this.$original = canvas.$original;
				this.$top = $(`<div />`);
				this.$color = $(`<input />`);
				this.$key = $(`<select />`);
				this.$openData = $(`<input />`);
				this.$open = $(`<button />`);
				this.$mockup = $(`<button />`);
				this.$save = $(`<button />`);
				this.$undo = $(`<button />`);
				this.$redo = $(`<button />`);
				this.$bottom = $(`<div />`);
				this.$left = $(`<div />`);
				this.$add = $(`<button />`);
				this.$layer = $(`<select />`);
				this.$copy = $(`<button />`);
				this.$up = $(`<button />`);
				this.$down = $(`<button />`);
				this.$delete = $(`<button />`);
				this.$right = $(`<div />`);
				
				this.$action = $(`<div />`);
				this.$actionLeft = $(`<div />`);
				this.$actionRight = $(`<div />`);
				this.$addText = $(`<button />`);
				this.$addImage = $(`<button />`);
				this.$addDesign = $(`<button />`);
				this.$addDesignData = $(`<input />`);
				this.$addCopy = $(`<div />`);
				this.$topNumber = $(`<input />`);
				this.$topRange = $(`<input />`);
				this.$topNumber = $(`<input />`);
				
				this.$leftRange = $(`<input />`);
				this.$leftNumber = $(`<input />`);
				this.$rotateXRange = $(`<input />`);
				this.$rotateXNumber = $(`<input />`);
				this.$rotateYRange = $(`<input />`);
				this.$rotateYNumber = $(`<input />`);
				this.$rotateRange = $(`<input />`);
				this.$rotateNumber = $(`<input />`);
				this.$skewRange = $(`<input />`);
				this.$skewNumber = $(`<input />`);
				this.$scaleX = $(`<input />`);
				this.$scaleY = $(`<input />`);
				
				this.$bgType = $(`<select />`);
				this.$bgColor = $(`<input />`);
				this.$bgColorAdd = $(`<button />`);
				this.$opacityRange = $(`<input />`);
				this.$opacityNumber = $(`<input />`);
				this.$posRange = $(`<input />`);
				this.$posNumber = $(`<input />`);
				this.$posXRange = $(`<input />`);
				this.$posXNumber = $(`<input />`);
				this.$posYRange = $(`<input />`);
				this.$posYNumber = $(`<input />`);
				this.$filterMain = $(`<select />`);
				this.$filterExist = $(`<input />`);
				this.$filterColor = $(`<input />`);
				
				this.$strokeColor = $(`<input />`);
				this.$strokeWidthRange = $(`<input />`);
				this.$strokeWidthNumber = $(`<input />`);
				
				this.$outlineColor = $(`<input />`);
				this.$outlineWidthRange = $(`<input />`);
				this.$outlineWidthNumber = $(`<input />`);
				
				this.$depthType = $(`<select />`);
				this.$depthColor = $(`<input />`);
				this.$depthWidthRange = $(`<input />`);
				this.$depthWidthNumber = $(`<input />`);
				
				this.$shadowColor = $(`<input />`);
				this.$shadowBlurRange = $(`<input />`);
				this.$shadowBlurNumber = $(`<input />`);
				this.$shadowXRange = $(`<input />`);
				this.$shadowXNumber = $(`<input />`);
				this.$shadowYRange = $(`<input />`);
				this.$shadowYNumber = $(`<input />`);
				
				this.$font = $(`<button />`);
				this.$text = $(`<textarea />`);
				this.$align = $(`<select />`);
				this.$bold = $(`<button />`);
				this.$italic = $(`<button />`);
				this.$underline = $(`<button />`);
				
				this.$fontSizeRange = $(`<input />`);
				this.$fontSizeNumber = $(`<input />`);
				this.$letterSpacingRange = $(`<input />`);
				this.$letterSpacingNumber = $(`<input />`);
				this.$lineHeightRange = $(`<input />`);
				this.$lineHeightNumber = $(`<input />`);
				
				this.$bgImage = $(`<button />`);
				this.$bgDelete = $(`<button />`);
				this.$bgWidthRange = $(`<input />`);
				this.$bgWidthNumber = $(`<input />`);
				this.$bgHeightRange = $(`<input />`);
				this.$bgHeightNumber = $(`<input />`);
				
				this.$curveType = $(`<select />`);
				this.$curveRoundRange = $(`<input />`);
				this.$curveRoundNumber = $(`<input />`);
				this.$curveDegressRange = $(`<input />`);
				this.$curveDegressNumber = $(`<input />`);
				
				this.$imageImage = $(`<button />`);
				this.$imageDelete = $(`<button />`);
				this.$imageWidthRange = $(`<input />`);
				this.$imageWidthNumber = $(`<input />`);
				this.$imageHeightRange = $(`<input />`);
				this.$imageHeightNumber = $(`<input />`);
				
				this.$roundWRange = $(`<input />`);
				this.$roundWNumber = $(`<input />`);
				this.$roundXRange = $(`<input />`);
				this.$roundXNumber = $(`<input />`);
				this.$roundYRange = $(`<input />`);
				this.$roundYNumber = $(`<input />`);
				this.$roundZRange = $(`<input />`);
				this.$roundZNumber = $(`<input />`);
				
				this.initialize();
				this.event();
				this.unredo.store(settings.data);
				this.render();
				
				
				}
			Editor.prototype = {
				unredo: {
                    key: -1,
                    data: [],
                    store: function (data) {
                        this.data.splice(this.key + 1, this.data.length - (this.key + 1));
                        if (JSON.stringify(data) != JSON.stringify(this.data[this.data.length - 1])) {
                            this.key += 1;
                            this.data.push(JSON.parse(`${JSON.stringify(data)}`));
                        }
                    },
                    hasUndo: function () {
                        if (this.key == 0) {
                            return false;
                        }
                        return true;
                    },
                    hasRedo: function () {
                        if (this.key == this.data.length - 1) {
                            return false;
                        }
                        return true;
                    },
                    undo: function () {
                        if (this.hasUndo()) {
                            this.key -= 1;
                            settings.data = JSON.parse(`${JSON.stringify(this.data[this.key])}`);
                        }
                    },
                    redo: function () {
                        if (this.hasRedo()) {
                            this.key += 1;
                            settings.data = JSON.parse(`${JSON.stringify(this.data[this.key])}`);
                        }
                    },
                 },
				initialize: function (){
					let editor = this;
					let canvas = editor.canvas;
					$.getScript("https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js");
					$(`<link />`).attr({rel: `stylesheet`, href:`https://cdn.jsdelivr.net/npm/remixicon@3.0.0/fonts/remixicon.css`}).appendTo($(`head`));
					this.$top.addClass(`ct-top`).prependTo(this.$original);
					this.$color.attr({type: `color`}).addClass(`ct-icon ct-float-left`).appendTo(this.$top);
					this.$key.addClass(`ct-select ct-float-left`).appendTo(this.$top);
					this.$openData.attr({type: `file`, accept: `application/json`});
					this.$open.addClass(`ct-icon ct-float-left`).append(`<ion-icon name="folder-open-outline"></ion-icon>`).appendTo(this.$top);
					this.$mockup.addClass(`ct-icon ct-float-left`).appendTo(this.$top);
					this.$save.addClass(`ct-icon ct-float-right`).append(`<ion-icon name="save-outline"></ion-icon>`).appendTo(this.$top);
					this.$redo.addClass(`ct-icon ct-float-right`).append(`<ion-icon name="arrow-redo-outline"></ion-icon>`).appendTo(this.$top);
					this.$undo.addClass(`ct-icon ct-float-right`).append(`<ion-icon name="arrow-undo-outline"></ion-icon>`).appendTo(this.$top);
					
					
					this.$bottom.addClass(`ct-bottom`).appendTo(this.$original);
					this.$left.addClass(`ct-float-left`).appendTo(this.$bottom);
					this.$add.addClass(`ct-icon ct-float-left`).append(`<ion-icon name="add-outline"></ion-icon>`).appendTo(this.$left);
					this.$layer.addClass(`ct-select ct-float-left`).appendTo(this.$left);
					this.$copy.addClass(`ct-icon-bottom ct-float-left`).append(`<ion-icon name="copy-outline"></ion-icon>`).appendTo(this.$left);
					this.$up.addClass(`ct-icon-bottom ct-float-left`).append(`<ion-icon name="arrow-up-outline"></ion-icon>`).appendTo(this.$left);
					this.$down.addClass(`ct-icon-bottom ct-float-left`).append(`<ion-icon name="arrow-down-outline"></ion-icon>`).appendTo(this.$left);
					this.$delete.addClass(`ct-icon-bottom ct-float-left`).append(`<ion-icon name="trash-outline"></ion-icon>`).appendTo(this.$left);
					this.$right.addClass(`ct-float-right`).appendTo(this.$bottom);
					this.$action.addClass(`ct-action ct-clear`).appendTo(this.$bottom);
					this.$actionLeft.css({width: `100%`}).appendTo(this.$action);
					this.$actionRight.css({width: `100%`}).appendTo(this.$action);
					let actionLeft = ["add-outline"];
					$.each(actionLeft, function (i, v){
						$(`<div />`).css({width: `100%`}).appendTo(editor.$actionLeft).hide();
						});
					this.$addText.addClass(`ct-button-block`).html(`Add Text`).appendTo(this.$actionLeft.children().eq(0));
					this.$addImage.addClass(`ct-button-block`).html(`Add Image`).appendTo(this.$actionLeft.children().eq(0));
					this.$addDesign.addClass(`ct-button-block`).html(`Import Design`).appendTo(this.$actionLeft.children().eq(0));
					this.$addDesignData.attr({type: `file`, accept: `application/json`});
					this.$addCopy.appendTo(this.$actionLeft.children().eq(0));
					
					
					let $position = $(`<div />`);
					let $positionTop = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($position);
					let $positionLeft = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($position);
					this.$topRange.attr({type: `range`, min: 0, max: 1000}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($positionTop);
					this.$topNumber.attr({type: `number`, min: 0, max: 1000, placeholder: `top`}).addClass(`ct-number ct-float-right`).appendTo($positionTop);
					this.$leftRange.attr({type: `range`, min: 0, max: 1000}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($positionLeft);
					this.$leftNumber.attr({type: `number`, min: 0, max: 1000, placeholder: `left`}).addClass(`ct-number ct-float-right`).appendTo($positionLeft);
					
					let $perspective = $(`<div />`);
					let $transformRotateX = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($perspective);
					let $transformRotateY = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($perspective);
					this.$rotateXRange.attr({type: `range`, min: -90, max: 90}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($transformRotateX);
					this.$rotateXNumber.attr({type: `number`, min: -90, max: 90, placeholder: `rotate x`}).addClass(`ct-number ct-float-right`).appendTo($transformRotateX);
					this.$rotateYRange.attr({type: `range`, min: -90, max: 90}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($transformRotateY);
					this.$rotateYNumber.attr({type: `number`, min: -90, max: 90, placeholder: `rotate y`}).addClass(`ct-number ct-float-right`).appendTo($transformRotateY);
					
					let $transform = $(`<div />`);
					let $transformRotate = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($transform);
					let $transformSkew= $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($transform);
					let $transformScale= $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($transform);
					this.$rotateRange.attr({type: `range`, min: -180, max: 180}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($transformRotate);
					this.$rotateNumber.attr({type: `number`, min: -180, max: 180, placeholder: `rotate`}).addClass(`ct-number ct-float-right`).appendTo($transformRotate);
					this.$skewRange.attr({type: `range`, min: -88, max: 88}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($transformSkew);
					this.$skewNumber.attr({type: `number`, min: -88, max: 88, placeholder: `skew`}).addClass(`ct-number ct-float-right`).appendTo($transformSkew);
					$transformScale.append($(`<span />`).addClass(`ct-span ct-float-left`).html(`flip vertical`));
					this.$scaleX.attr({type: `checkbox`}).addClass(`ct-checkbox ct-float-left`).appendTo($transformScale);
					this.$scaleY.attr({type: `checkbox`}).addClass(`ct-checkbox ct-float-right`).appendTo($transformScale);
					$transformScale.append($(`<span />`).addClass(`ct-span ct-float-right`).html(`flip horizontal`));
					
					let $coloring = $(`<div />`);
					let $coloringColor = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($coloring);
					let $coloringOpacity = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($coloring);
					$.each(["none", "normal", "linear-gredient", "radial-gradient", "same-parent"], function (i, v){
						editor.$bgType.append($(`<option />`).attr({value: i}).html(v));
						});
					this.$bgType.addClass(`ct-select ct-float-left`).appendTo($coloringColor);
					this.$bgColor.attr({type: `color`}).addClass(`ct-icon ct-float-right`).appendTo($coloringColor);
					this.$bgColorAdd.addClass(`ct-icon ct-float-right`).append(`<ion-icon name="add-outline"></ion-icon>`).appendTo($coloringColor);
					this.$opacityRange.attr({type: `range`, min: 0, max: 100}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($coloringOpacity);
					this.$opacityNumber.attr({type: `number`, min: 0, max: 100, placeholder: `opacity`}).addClass(`ct-number ct-float-right`).appendTo($coloringOpacity);
					
					let $gradient = $(`<div />`);
					let $gradientPos = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($gradient);
					let $gradientPosX = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($gradient);
					let $gradientPosY = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($gradient);
					this.$posRange.attr({type: `range`, min: -180, max: 180}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($gradientPos);
					this.$posNumber.attr({type: `number`, min: -180, max: 180, placeholder: `pos`}).addClass(`ct-number ct-float-right`).appendTo($gradientPos);
					this.$posXRange.attr({type: `range`, min: 0, max: 100}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($gradientPosX);
					this.$posXNumber.attr({type: `number`, min: 0, max: 100, placeholder: `pos x`}).addClass(`ct-number ct-float-right`).appendTo($gradientPosX);
					this.$posYRange.attr({type: `range`, min: 0, max: 100}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($gradientPosY);
					this.$posYNumber.attr({type: `number`, min: 0, max: 100, placeholder: `pos y`}).addClass(`ct-number ct-float-right`).appendTo($gradientPosY);
					
					let $filter = $(`<div />`);
					let $filterMain = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($filter);
					let $filterColor = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($filter);
					$.each(["grayscale(100)"], function (i, v){
						editor.$filterMain.append($(`<option />`).attr({value: `${v}`}).html(v));
						});
					this.$filterMain.prepend($(`<option />`).attr({value: ``}).html(`none`)).addClass(`ct-select ct-float-left`).css({width: `100%`}).appendTo($filterMain);
					$filterColor.append($(`<span />`).addClass(`ct-span ct-float-left`).html(`filter exist`));
					this.$filterExist.attr({type: `checkbox`}).addClass(`ct-checkbox ct-float-left`).appendTo($filterColor);
					this.$filterColor.attr({type: `color`}).addClass(`ct-icon ct-float-right`).appendTo($filterColor);
					
					let $stroke = $(`<div />`);
					let $strokeColor = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($stroke);
					let $strokeWidth = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($stroke);
					$strokeColor.append($(`<span />`).addClass(`ct-span ct-float-left`).html(`stroke color`));
					this.$strokeColor.attr({type: `color`}).addClass(`ct-icon ct-float-right`).appendTo($strokeColor);
					this.$strokeWidthRange.attr({type: `range`, min: 0, max: 35}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($strokeWidth);
					this.$strokeWidthNumber.attr({type: `number`, min: 0, max: 35, placeholder: `width`}).addClass(`ct-number ct-float-right`).appendTo($strokeWidth);
					
					let $outline = $(`<div />`);
					let $outlineColor = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($outline);
					let $outlineWidth = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($outline);
					$outlineColor.append($(`<span />`).addClass(`ct-span ct-float-left`).html(`outline color`));
					this.$outlineColor.attr({type: `color`}).addClass(`ct-icon ct-float-right`).appendTo($outlineColor);
					this.$outlineWidthRange.attr({type: `range`, min: 0, max: 35}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($outlineWidth);
					this.$outlineWidthNumber.attr({type: `number`, min: 0, max: 35, placeholder: `width`}).addClass(`ct-number ct-float-right`).appendTo($outlineWidth);
					
					
					let $depth = $(`<div />`);
					let $depthType = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($depth);
					let $depthColor = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($depth);
					let $depthWidth = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($depth);
					$.each(["left-top", "top", "top-right", "right", "right-bottom", "bottom", "bottom-left", "left"], function (i, v){
						editor.$depthType.append($(`<option />`).attr({value: i}).html(v));
						});
					this.$depthType.addClass(`ct-select ct-float-left`).css({width: `100%`}).appendTo($depthType);
					
					$depthColor.append($(`<span />`).addClass(`ct-span ct-float-left`).html(`depth color`));
					this.$depthColor.attr({type: `color`}).addClass(`ct-icon ct-float-right`).appendTo($depthColor);
					this.$depthWidthRange.attr({type: `range`, min: 0, max: 15}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($depthWidth);
					this.$depthWidthNumber.attr({type: `number`, min: 0, max: 15, placeholder: `width`}).addClass(`ct-number ct-float-right`).appendTo($depthWidth);
					
					
					let $shadow = $(`<div />`);
					let $shadowBlur = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($shadow);
					let $shadowColor = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($shadow);
					let $shadowX = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($shadow);
					let $shadowY = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($shadow);
					$shadowColor.append($(`<span />`).addClass(`ct-span ct-float-left`).html(`shadow color`));
					this.$shadowColor.attr({type: `color`}).addClass(`ct-icon ct-float-right`).appendTo($shadowColor);
					this.$shadowBlurRange.attr({type: `range`, min: 0, max: 15}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($shadowBlur);
					this.$shadowBlurNumber.attr({type: `number`, min: 0, max: 15, placeholder: `blur`}).addClass(`ct-number ct-float-right`).appendTo($shadowBlur);
					this.$shadowXRange.attr({type: `range`, min: -180, max: 180}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($shadowX);
					this.$shadowXNumber.attr({type: `number`, min: -180, max: 180, placeholder: `pos x`}).addClass(`ct-number ct-float-right`).appendTo($shadowX);
					this.$shadowYRange.attr({type: `range`, min: -180, max: 180}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($shadowY);
					this.$shadowYNumber.attr({type: `number`, min: -180, max: 180, placeholder: `pos y`}).addClass(`ct-number ct-float-right`).appendTo($shadowY);
					
					let $text = $(`<div />`);
					let $textFont = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($text);
					let $textAlign = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($text);
					this.$font.css({width: `100%`, fontSize: `18px`, padding: `10px`, marginBottom: `10px`}).html(`Font`).appendTo($textFont);
					this.$text.addClass(`ct-textarea`).html(`Font`).appendTo($textFont);
					$.each(["left", "center", "right"], function (i, v){
						editor.$align.append($(`<option />`).attr({value: i}).html(v));
						});
					this.$align.addClass(`ct-select ct-float-left`).css({width: `${editor.$action.width()-110}px`}).appendTo($textAlign);
					this.$underline.addClass(`ct-icon ct-float-right`).append(`<i class="ri-underline"></i>`).appendTo($textAlign);
					this.$italic.addClass(`ct-icon ct-float-right`).append(`<i class="ri-italic"></i>`).appendTo($textAlign);
					this.$bold.addClass(`ct-icon ct-float-right`).append(`<i class="ri-bold"></i>`).appendTo($textAlign);
					
					let $size = $(`<div />`);
					let $sizeFont = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($size);
					let $sizeSpace = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($size);
					let $sizeHeight= $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($size);
					this.$fontSizeRange.attr({type: `range`, min: 0, max: 500}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($sizeFont);
					this.$fontSizeNumber.attr({type: `number`, min: 0, max: 500, placeholder: `font size`}).addClass(`ct-number ct-float-right`).appendTo($sizeFont);
					this.$letterSpacingRange.attr({type: `range`, min: 0, max: 500}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($sizeSpace);
					this.$letterSpacingNumber.attr({type: `number`, min: 0, max: 500, placeholder: `letter spacing`}).addClass(`ct-number ct-float-right`).appendTo($sizeSpace);
					this.$lineHeightRange.attr({type: `range`, min: 0, max: 500}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($sizeHeight);
					this.$lineHeightNumber.attr({type: `number`, min: 0, max: 500, placeholder: `line height`}).addClass(`ct-number ct-float-right`).appendTo($sizeHeight);
					
					let $bg = $(`<div />`);
					let $bgImage = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($bg);
					let $bgWidth = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($bg);
					let $bgHeight = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($bg);
					this.$bgImage.addClass(`ct-float-left`).css({width: `${editor.$action.width()-40}px`, fontSize: `15px`, padding: `5px`}).html(`Select Image`).appendTo($bgImage);
					this.$bgDelete.addClass(`ct-icon-bottom ct-float-right`).append(`<ion-icon name="trash-outline"></ion-icon>`).appendTo($bgImage);
					this.$bgWidthRange.attr({type: `range`, min: 0, max: 500}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($bgWidth);
					this.$bgWidthNumber.attr({type: `number`, min: 0, max: 500, placeholder: `width`}).addClass(`ct-number ct-float-right`).appendTo($bgWidth);
					this.$bgHeightRange.attr({type: `range`, min: 0, max: 500}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($bgHeight);
					this.$bgHeightNumber.attr({type: `number`, min: 0, max: 500, placeholder: `height`}).addClass(`ct-number ct-float-right`).appendTo($bgHeight);
					
					let $curve = $(`<div />`);
					let $curveType = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($curve);
					let $curveRound = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($curve);
					let $curveDegress = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($curve);
					$curveType.append($(`<span />`).addClass(`ct-span ct-float-left`).html(`type:`));
					$.each(["none", "sad", "smile", "sad unrotate", "smile unrotate"], function (i, v){
						editor.$curveType.append($(`<option />`).attr({value: i}).html(v));
						});
					this.$curveType.addClass(`ct-select ct-float-right`).css({width: `${editor.$action.width()-80}px`}).appendTo($curveType);
					this.$curveRoundRange.attr({type: `range`, min: 0, max: 80}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($curveRound);
					this.$curveRoundNumber.attr({type: `number`, min: 0, max: 80, placeholder: `Round`}).addClass(`ct-number ct-float-right`).appendTo($curveRound);
					this.$curveDegressRange.attr({type: `range`, min: 0, max: 180}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($curveDegress);
					this.$curveDegressNumber.attr({type: `number`, min: 0, max: 180, placeholder: `Degress`}).addClass(`ct-number ct-float-right`).appendTo($curveDegress);
					
					let $image = $(`<div />`);
					let $imageImage = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($image);
					let $imageWidth = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($image);
					let $imageHeight = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($image);
					this.$imageImage.addClass(`ct-float-left`).css({width: `${editor.$action.width()-40}px`, fontSize: `15px`, padding: `5px`}).html(`Select Image`).appendTo($imageImage);
					this.$imageDelete.addClass(`ct-icon-bottom ct-float-right`).append(`<ion-icon name="trash-outline"></ion-icon>`).appendTo($imageImage);
					this.$imageWidthRange.attr({type: `range`, min: 0, max: 1000}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($imageWidth);
					this.$imageWidthNumber.attr({type: `number`, min: 0, max: 1000, placeholder: `width`}).addClass(`ct-number ct-float-right`).appendTo($imageWidth);
					this.$imageHeightRange.attr({type: `range`, min: 0, max: 1000}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($imageHeight);
					this.$imageHeightNumber.attr({type: `number`, min: 0, max: 1000, placeholder: `height`}).addClass(`ct-number ct-float-right`).appendTo($imageHeight);
					
					let $round = $(`<div />`);
					let $roundW = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($round);
					let $roundX = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($round);
					let $roundY = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($round);
					let $roundZ = $(`<div />`).addClass(`ct-wrap ct-clear`).appendTo($round);
					this.$roundWRange.attr({type: `range`, min: 0, max: 100}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($roundW);
					this.$roundWNumber.attr({type: `number`, min: 0, max: 100, placeholder: `round w`}).addClass(`ct-number ct-float-right`).appendTo($roundW);
					this.$roundXRange.attr({type: `range`, min: 0, max: 100}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($roundX);
					this.$roundXNumber.attr({type: `number`, min: 0, max: 100, placeholder: `round x`}).addClass(`ct-number ct-float-right`).appendTo($roundX);
					this.$roundYRange.attr({type: `range`, min: 0, max: 100}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($roundY);
					this.$roundYNumber.attr({type: `number`, min: 0, max: 100, placeholder: `round y`}).addClass(`ct-number ct-float-right`).appendTo($roundY);
					this.$roundZRange.attr({type: `range`, min: 0, max: 100}).addClass(`ct-slider ct-float-left`).css({width: `${editor.$action.width()-80}px`}).appendTo($roundZ);
					this.$roundZNumber.attr({type: `number`, min: 0, max: 100, placeholder: `round z`}).addClass(`ct-number ct-float-right`).appendTo($roundZ);
					
					let actionRight = [{name:"color-wand-outline", action: [{option:"stroke", wrap: $stroke}, {option:"outline", wrap: $outline}, {option:"depth", wrap: $depth},{option:"shadow", wrap: $shadow}]}, {name:"crop-outline", action: [{option:"perspective", wrap: $perspective}, {option:"transform", wrap: $transform}]}, {name:"move-outline", action: [{option:"position", wrap: $position}]}, {name:"color-fill-outline", action: [{option:"coloring", wrap: $coloring}, {option:"gradient", wrap: $gradient}, {option:"filter", wrap: $filter}]},{name:"text-outline", action: [{option:"text", wrap: $text}, {option:"size", wrap: $size}, {option:"image", wrap: $bg}, {option:"curve", wrap: $curve}]}, {name:"image-outline", action: [{option:"image", wrap: $image}, {option:"round", wrap: $round}]} ];
					$.each(actionRight, function (i, v){
						$(`<button />`).addClass(`ct-icon-bottom ct-float-right`).append(`<ion-icon name="${v.name}"></ion-icon>`).hover(function (){$(this).css({color: `#000000`})}, function (){$(this).css({color: `#777777`})}).appendTo(editor.$right);
						let $option = $(`<div />`);
						let $wrap = $(`<div />`).css({clear:`both`});
						$.each(v.action, function (j, w){
							$option.append($(`<button />`).attr({value: j}).addClass(`ct-button-option`).html(w.option).on(`click`, function (){
								$option.children().removeClass(`ct-button-option-selected`).addClass(`ct-button-option`);
								$option.children().eq(this.value).removeClass(`ct-button-option`).addClass(`ct-button-option-selected`);
								$wrap.children().hide();
								$wrap.children().eq(this.value).show();
								
								}));
							$wrap.append(w.wrap.hide());
							});
						$(`<div />`).append($option).append($wrap).appendTo(editor.$actionRight).hide();
						});
					},
				event: function (){
					let editor = this;
					let canvas = editor.canvas;
					this.$color.on("change", function (){
						settings.data.color = this.value;
						canvas.color();
						editor.unredo.store(settings.data);
						editor.render();
						});
					this.$key.on("change", function (){
						settings.data.key = Number(this.value);
						canvas.render();
						editor.unredo.store(settings.data);
						editor.render();
						});
					this.$mockup.on("click", function (){
						settings.data.mockup = (settings.data.mockup)?false:true;
						canvas.mockup();
						editor.unredo.store(settings.data);
						editor.render();
						});
					this.$open.on("click", function (){
						editor.$openData.click();
						});
					this.$openData.on("change", function (){
						const files = this.files;
						if (files.length <= 0) {return false;}
						const fr = new FileReader();
						fr.onload = function (e) {
							const r = e.target.result;
							try {
								settings.data = JSON.parse(r);
								canvas.render();
								editor.unredo.store(settings.data);
								editor.render();
								}
							catch (e) {
								settings.data = JSON.parse(`${JSON.stringify(editor.unredo.data[editor.unredo.data.length-1])}`);
								canvas.render();
								editor.render();
								alert(e);
								}
							};
						fr.readAsText(files.item(0));
						this.value = null;
						});
					this.$save.on("click", function (){
						settings.onSave(settings.data);
						});
					this.$undo.on("click", function (){
						editor.unredo.undo();
						canvas.render();
						editor.render();
						});
					this.$redo.on("click", function (){
						editor.unredo.redo();
						canvas.render();
						editor.render();
						});
						
					
					
					this.$addText.on("click", function (){
						settings.data.canvas[settings.data.key].layer.push(JSON.parse(`${JSON.stringify(text)}`));
						settings.data.canvas[settings.data.key].key = settings.data.canvas[settings.data.key].layer.length-1;
						canvas.render();
						editor.unredo.store(settings.data);
						editor.render();
						
						});
					this.$addImage.on("click", function (){
						settings.data.canvas[settings.data.key].layer.push(JSON.parse(`${JSON.stringify(image)}`));
						settings.data.canvas[settings.data.key].key = settings.data.canvas[settings.data.key].layer.length-1;
						canvas.render();
						editor.unredo.store(settings.data);
						editor.render();
						
						});
					this.$addDesign.on("click", function (){
						editor.$addDesignData.click();
						
						});
					this.$addDesignData.on("change", function (){
						const files = this.files;
						if (files.length <= 0) {return false;}
						const fr = new FileReader();
						fr.onload = function (e) {
							const r = e.target.result;
							try {
								$.each(JSON.parse(r), function (i, v){
									settings.data.canvas[settings.data.key].layer.push(JSON.parse(`${JSON.stringify(v)}`));
									});
								settings.data.canvas[settings.data.key].key = settings.data.canvas[settings.data.key].layer.length-1;
								canvas.render();
								editor.unredo.store(settings.data);
								editor.render();
								}
							catch (e) {
								settings.data = JSON.parse(`${JSON.stringify(editor.unredo.data[editor.unredo.data.length-1])}`);
								canvas.render();
								editor.render();
								alert(e);
								}
							};
						fr.readAsText(files.item(0));
						this.value = null;
						});
					this.$layer.on("change", function (){
						settings.data.canvas[settings.data.key].key = Number(this.value);
						canvas.render();
						editor.unredo.store(settings.data);
						editor.render();
						});
					this.$copy.on("click", function (){
						settings.data.canvas[settings.data.key].layer.push(JSON.parse(`${JSON.stringify(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key])}`));
						settings.data.canvas[settings.data.key].key = settings.data.canvas[settings.data.key].layer.length-1;
						canvas.render();
						editor.unredo.store(settings.data);
						editor.render();
						
						});
					this.$up.on("click", function (){
						let data = settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key];
                        settings.data.canvas[settings.data.key].layer.splice(settings.data.canvas[settings.data.key].key, 1);
                        settings.data.canvas[settings.data.key].layer.splice(settings.data.canvas[settings.data.key].key + 1, 0, JSON.parse(`${JSON.stringify(data)}`));
                        settings.data.canvas[settings.data.key].key += 1;
						canvas.render();
						editor.unredo.store(settings.data);
						editor.render();
						
						});
					this.$down.on("click", function (){
						let data = settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key];
                        settings.data.canvas[settings.data.key].layer.splice(settings.data.canvas[settings.data.key].key, 1);
                        settings.data.canvas[settings.data.key].layer.splice(settings.data.canvas[settings.data.key].key - 1, 0, JSON.parse(`${JSON.stringify(data)}`));
                        settings.data.canvas[settings.data.key].key -= 1;
						canvas.render();
						editor.unredo.store(settings.data);
						editor.render();
						
						});
					this.$delete.on("click", function (){
                        settings.data.canvas[settings.data.key].layer.splice(settings.data.canvas[settings.data.key].key, 1);
                        settings.data.canvas[settings.data.key].key = -1;
						canvas.render();
						editor.unredo.store(settings.data);
						editor.render();
						
						});
					this.$left.children("button").on("click", function (){
						if(editor.$actionLeft.children().eq($(this).index()).is(`:visible`)){
							editor.$actionLeft.children().hide();
							editor.$actionRight.children().hide();
							}
						else{
							editor.$actionLeft.children().hide();
							editor.$actionRight.children().hide();
							editor.$actionLeft.children().eq($(this).index()).show();
							}
						canvas.render();
						editor.render();
						});
					this.$right.children("button").on("click", function (){
						if(editor.$actionRight.children().eq($(this).index()).is(`:visible`)){
							editor.$actionLeft.children().hide();
							editor.$actionRight.children().hide();
							}
						else{
							editor.$actionLeft.children().hide();
							editor.$actionRight.children().hide();
							editor.$actionRight.children().eq($(this).index()).show();
							}
						let $button = editor.$actionRight.children().eq($(this).index()).children().eq(0).children().eq(0);
						$button.click();
						editor.render();
						});
					this.$topRange.on("input", function (){
						settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].top = Number(this.value);
						editor.$topNumber.val(Number(this.value));
						this.style.backgroundSize = `${Number(this.value)/(Number(this.max)-Number(this.min))*100}% 100%`;
						canvas.render();
						}).on(`change`, function(){
							canvas.render();
							editor.unredo.store(settings.data);
							editor.render();
							});
					this.$topNumber.on("input", function (){
						settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].top = Number(this.value);
						editor.$topRange.css({backgroundSize: `${(this.value/(Number(this.max)-Number(this.min))*100)}% 100%`}).val(Number(this.value));
						canvas.render();
						}).on(`change`, function(){
							canvas.render();
							editor.unredo.store(settings.data);
							editor.render();
							});
					this.$leftRange.on("input", function (){
						settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].left = Number(this.value);
						editor.$leftNumber.val(Number(this.value));
						this.style.backgroundSize = `${Number(this.value)/(Number(this.max)-Number(this.min))*100}% 100%`;
						canvas.render();
						}).on(`change`, function(){
							canvas.render();
							editor.unredo.store(settings.data);
							editor.render();
							});
					this.$leftNumber.on("input", function (){
						settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].left = Number(this.value);
						editor.$leftRange.css({backgroundSize: `${(this.value/(Number(this.max)-Number(this.min))*100)}% 100%`}).val(Number(this.value));
						canvas.render();
						}).on(`change`, function(){
							canvas.render();
							editor.unredo.store(settings.data);
							editor.render();
							});
					this.$rotateXRange.on("input", function (){
						settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].transform.rotateX = Number(this.value);
						editor.$rotateXNumber.val(Number(this.value));
						this.style.backgroundSize = `${(Number(this.value)/(Number(this.max)-Number(this.min))*100)+50}% 100%`;
						canvas.render();
						}).on(`change`, function(){
							canvas.render();
							editor.unredo.store(settings.data);
							editor.render();
							});
					this.$rotateXNumber.on("input", function (){
						settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].transform.rotateX = Number(this.value);
						editor.$rotateXRange.css({backgroundSize: `${((this.value/(Number(this.max)-Number(this.min))*100)+50)}% 100%`}).val(Number(this.value));
						canvas.render();
						}).on(`change`, function(){
							canvas.render();
							editor.unredo.store(settings.data);
							editor.render();
							});
					this.$rotateYRange.on("input", function (){
						settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].transform.rotateY = Number(this.value);
						editor.$rotateYNumber.val(Number(this.value));
						this.style.backgroundSize = `${(Number(this.value)/(Number(this.max)-Number(this.min))*100)+50}% 100%`;
						canvas.render();
						}).on(`change`, function(){
							canvas.render();
							editor.unredo.store(settings.data);
							editor.render();
							});
					this.$rotateYNumber.on("input", function (){
						settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].transform.rotateY = Number(this.value);
						editor.$rotateYRange.css({backgroundSize: `${((this.value/(Number(this.max)-Number(this.min))*100)+50)}% 100%`}).val(Number(this.value));
						canvas.render();
						}).on(`change`, function(){
							canvas.render();
							editor.unredo.store(settings.data);
							editor.render();
							});
					this.$rotateRange.on("input", function (){
						settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].child.transform.rotate = Number(this.value);
						editor.$rotateNumber.val(Number(this.value));
						this.style.backgroundSize = `${(Number(this.value)/(Number(this.max)-Number(this.min))*100)+50}% 100%`;
						canvas.render();
						}).on(`change`, function(){
							canvas.render();
							editor.unredo.store(settings.data);
							editor.render();
							});
					this.$rotateNumber.on("input", function (){
						settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].child.transform.rotate = Number(this.value);
						editor.$rotateRange.css({backgroundSize: `${((this.value/(Number(this.max)-Number(this.min))*100)+50)}% 100%`}).val(Number(this.value));
						canvas.render();
						}).on(`change`, function(){
							canvas.render();
							editor.unredo.store(settings.data);
							editor.render();
							});
					this.$skewRange.on("input", function (){
						settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].child.transform.skew = Number(this.value);
						editor.$skewNumber.val(Number(this.value));
						this.style.backgroundSize = `${(Number(this.value)/(Number(this.max)-Number(this.min))*100)+50}% 100%`;
						canvas.render();
						}).on(`change`, function(){
							canvas.render();
							editor.unredo.store(settings.data);
							editor.render();
							});
					this.$skewNumber.on("input", function (){
						settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].child.transform.skew = Number(this.value);
						editor.$skewRange.css({backgroundSize: `${((this.value/(Number(this.max)-Number(this.min))*100)+50)}% 100%`}).val(Number(this.value));
						canvas.render();
						}).on(`change`, function(){
							canvas.render();
							editor.unredo.store(settings.data);
							editor.render();
							});
					this.$scaleX.on(`change`, function(){
						settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].child.transform.scaleX = (this.checked)?-1:1;
						canvas.render();
						editor.unredo.store(settings.data);
						editor.render();
						});
					this.$scaleY.on(`change`, function(){
						settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].child.transform.scaleY = (this.checked)?-1:1;
						canvas.render();
						editor.unredo.store(settings.data);
						editor.render();
						});
					
					},
				render: function (){
					let editor = this;
					let canvas = editor.canvas;
					this.$color.val(settings.data.color);
					this.$key.empty();
					$.each(settings.data.canvas, function (i, v){
						editor.$key.append(`<option value="${i}" ${(settings.data.key == i)?`selected disabled`:``}>${String(v.name).charAt(0).toUpperCase() + String(v.name).slice(1)}</option>`);
						});
					this.$mockup.empty();
					(settings.data.mockup)?this.$mockup.append(`<ion-icon name="shirt-outline"></ion-icon>`):this.$mockup.append(`<ion-icon name="shirt"></ion-icon>`);
					(this.unredo.hasUndo())?this.$undo.removeAttr("disabled").css({color: `#777777`}):this.$undo.attr({disabled: true}).css({color: `#aaaaaa`});
					(this.unredo.hasRedo())?this.$redo.removeAttr("disabled").css({color: `#777777`}):this.$redo.attr({disabled: true}).css({color: `#aaaaaa`});
					this.$addCopy.empty();
					$.each(settings.data.canvas, function (i, v){
						if(settings.data.key != i && settings.data.canvas[i].layer.length != 0){
							$(`<button />`).attr({type: `button`, value:`${i}`}).addClass(`ct-button-block`).html(`Copy from ${v.name}`).on(`click`, function (){
								$.each(settings.data.canvas[i].layer, function (j, w){
									settings.data.canvas[settings.data.key].layer.push(JSON.parse(`${JSON.stringify(w)}`));
									});
								settings.data.canvas[settings.data.key].key = settings.data.canvas[settings.data.key].layer.length-1;
								canvas.render();
								editor.unredo.store(settings.data);
								editor.render();
								}).appendTo(editor.$addCopy);
							}
						});
					
					this.$layer.empty();
					$.each(settings.data.canvas[settings.data.key].layer, function (i, v){
						let name = "";
                            if (v.type == "image") {
                                name = String(v.child.backgroundImage.url).replace(/^.*[\\\/]/, "");
                            } else {
                                name = v.child.html;
                            }
						editor.$layer.prepend(`<option value="${i}" ${(settings.data.canvas[settings.data.key].key == i)?`selected disabled`:``}>${name}</option>`);
						});
					if(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key] == undefined){
						editor.$layer.prepend(`<option selected disabled>No layer selected</option>`);
						editor.$copy.attr({disabled: true}).css({color: `#aaaaaa`});
						editor.$up.attr({disabled: true}).css({color: `#aaaaaa`});
						editor.$down.attr({disabled: true}).css({color: `#aaaaaa`});
						editor.$delete.attr({disabled: true}).css({color: `#aaaaaa`});
						editor.$right.hide();
						editor.$actionRight.children().hide();
						}
					else{
						editor.$copy.removeAttr("disabled").css({color: `#777777`});
						(settings.data.canvas[settings.data.key].key == settings.data.canvas[settings.data.key].layer.length-1)?editor.$up.attr({disabled: true}).css({color: `#aaaaaa`}):editor.$up.removeAttr("disabled").css({color: `#777777`});
						(settings.data.canvas[settings.data.key].key == 0)?editor.$down.attr({disabled: true}).css({color: `#aaaaaa`}):editor.$down.removeAttr("disabled").css({color: `#777777`});
						editor.$delete.removeAttr("disabled").css({color: `#777777`});
						editor.$right.show();
						
						this.$topRange.css({backgroundSize: `${(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].top/(Number(this.$topRange.attr(`max`))-Number(this.$topRange.attr(`min`)))*100)}% 100%`}).val(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].top);
						this.$topNumber.val(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].top);
						this.$leftRange.css({backgroundSize: `${(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].left/(Number(this.$leftRange.attr(`max`))-Number(this.$leftRange.attr(`min`)))*100)}% 100%`}).val(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].left);
						this.$leftNumber.val(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].left);
						this.$rotateXRange.css({backgroundSize: `${(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].transform.rotateX/(Number(this.$rotateXRange.attr(`max`))-Number(this.$rotateXRange.attr(`min`)))*100)+50}% 100%`}).val(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].transform.rotateX);
						this.$rotateXNumber.val(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].transform.rotateX);
						this.$rotateYRange.css({backgroundSize: `${(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].transform.rotateY/(Number(this.$rotateYRange.attr(`max`))-Number(this.$rotateYRange.attr(`min`)))*100)+50}% 100%`}).val(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].transform.rotateY);
						this.$rotateYNumber.val(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].transform.rotateY);
						this.$rotateRange.css({backgroundSize: `${(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].child.transform.rotate/(Number(this.$rotateRange.attr(`max`))-Number(this.$rotateRange.attr(`min`)))*100)+50}% 100%`}).val(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].child.transform.rotate);
						this.$rotateNumber.val(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].child.transform.rotate);
						this.$skewRange.css({backgroundSize: `${(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].child.transform.skew/(Number(this.$skewRange.attr(`max`))-Number(this.$skewRange.attr(`min`)))*100)+50}% 100%`}).val(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].child.transform.skew);
						this.$skewNumber.val(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].child.transform.skew);
						(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].child.transform.scaleX==1)?this.$scaleX.prop("checked", false):this.$scaleX.prop("checked", true);
						(settings.data.canvas[settings.data.key].layer[settings.data.canvas[settings.data.key].key].child.transform.scaleY==1)?this.$scaleY.prop("checked", false):this.$scaleY.prop("checked", true)
						}
						
					
					}
					
				}
			return Editor;
			})();
		
		return this.each(function (){
			let canvas = new Canvas(this);
			if(settings.editor){
				new Editor(canvas);
				}
			});
	};
})(jQuery);