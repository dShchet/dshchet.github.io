$(document).ready(function(){
			$('.main-header__phone a[href="#feedback-modal"]').bind('click tap',function(){
					yaCounter46391295.reachGoal('click-obr');
				});
				$('form[name="SIMPLE_FORM_1"] [type="submit"]').bind('click tap',function(){
					setTimeout(function(){
						if($('form[name="SIMPLE_FORM_1"] .has-error').length==0)
							yaCounter46391295.reachGoal('submit-obr');
					}, 200);
				});
				$('a[href="#order-modal"]').bind('click tap',function(){
					yaCounter46391295.reachGoal('click-z');
				});
				$('form[name="SIMPLE_FORM_2"] [type="submit"]').bind('click tap',function(){
					setTimeout(function(){
						if($('form[name="SIMPLE_FORM_2"] .has-error').length==0)
						yaCounter46391295.reachGoal('submit-z');
					}, 200);
				});
				$('a[href="#cooperation-modal"]').bind('click tap',function(){
					yaCounter46391295.reachGoal('click-sot');
				});
				$('form[name="cooperation"] [type="submit"]').bind('click tap',function(){
					setTimeout(function(){
						if($('form[name="cooperation"] .has-error').length==0)
						yaCounter46391295.reachGoal('submit-sot');
					}, 200);
				});
				$('.main-header__phone a[href^=tel]').bind('click tap',function(){
					yaCounter46391295.reachGoal('click-tel');
				});
		});
