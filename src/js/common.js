$(document).ready(function() {
	/*	popup	*/
	$(document).on('click', '.popupBtn', function() {
		var popupIndex = $(this).attr('id');
		$(".popupContainer."+popupIndex).addClass("on");
	});
	$(document).on('click', '.popupDimmed', function() {
		$(this).parent().removeClass("on");
	});
	$(document).on('click', '.popupContainer .close', function() {
		$(this).parents(".popupContainer").removeClass("on");
	});

    $("header .menu").click(function() {
		$(".menuWrap").addClass("on");
    });
    $("header .close").click(function() {
		$(".menuWrap").removeClass("on");
    });

	/*	calendar	*/
		$( ".calendar" ).datepicker({
			dateFormat: "yy-mm-dd D",
			showOtherMonths: true,
			selectOtherMonths: true,
			dayNamesMin: ['일','월','화','수','목','금','토'],
            dayNamesShort: ['일','월','화','수','목','금','토'],
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			showMonthAfterYear: true,
			changeMonth: false,
			changeYear: false
		});
		from = $( "#from" ).datepicker({
		})
		.on( "change", function() {
			to.datepicker( "option", "minDate", getDate( this ) );
		}),
		to = $( "#to" ).datepicker({
		})
		.on( "change", function() {
			from.datepicker( "option", "maxDate", getDate( this ) );
		});
		function getDate( element ) {
			var date;
			try {
				date = $.datepicker.parseDate( dateFormat, element.value );
			} catch( error ) {
				date = null;
			}
		return date;
		}
	/*	//calendar	*/	

	/*	select	*/
		$('select').each(function () {
			var $this = $(this),
				numberOfOptions = $(this).children('option').length;
			$this.addClass('hidden');
			$this.wrap('<div class="select"></div>');
			$this.after('<div class="selectBox"></div>');
			var $selectBox = $this.next('div.selectBox');
			$selectBox.text($this.children('option').eq(0).text());
			var $list = $('<ul />', {
				'class': 'options'
			}).insertAfter($selectBox);
			for (var i = 0; i < numberOfOptions; i++) {
				$('<li />', {
					text: $this.children('option').eq(i).text(),
					rel: $this.children('option').eq(i).val()
				}).appendTo($list);
			}
			var $listItems = $list.children('li');
			$selectBox.click(function (e) {
				e.stopPropagation();
				$('div.selectBox.active').each(function () {
					$(this).removeClass('active').next('ul.options').hide();
				});
				$(this).toggleClass('active').next('ul.options').toggle();
			});
			$listItems.click(function (e) {
				e.stopPropagation();
				$selectBox.text($(this).text()).removeClass('active');
				$this.val($(this).attr('rel'));
				$list.hide();
			});
			$(document).click(function () {
				$selectBox.removeClass('active');
				$list.hide();
			});
		});
	/*	//select	*/

    /* textarea auto height */
    $('textarea.autosize').on('keydown keyup', function(){
        $(this).height(1).height($(this).prop('scrollHeight')+17);
    });

    /* tab */
    $('[data-evt="tab"]').each(function(){
        var $tab = $(this);
        if( $tab.length <= 0 ) return;

        $tab.find('a').click(function(e){
            e.preventDefault();

            $(this).parent('li').siblings('').removeClass('active');
            $(this).parent('li').addClass('active');
        });
    });
});
