$(function() {

    $('.js_calc').click(function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: ($('.product-tabs').offset().top - 200)
        }, 300, function() {
            $('#tab3').trigger('click');
            // $('.block-calc2-form').slideUp();
            // $('.block-calc-form').slideDown();
        });
    });
    $('.js_calc2').click(function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $('#calc-point').offset().top
        }, 300, function() {
            $('.block-calc-form').slideUp();
            $('.block-calc2-form').slideDown();
        });
    });

    $('#fcallback').submit(function(e) {
        e.preventDefault();

        // Roistat begin
        var self = $(this);
        // Roistat end
        $ajaxUrl = $(this).attr('action');
        if ($ajaxUrl == "index.html#point_1") {
            $ajaxUrl = "/#point_1";
        }
        $.ajax({
            type: $(this).attr('method'),
            url: $ajaxUrl,
            data: $(this).serialize(),
            resetForm: 'true',
            success: function(output) {
                var data = $(output).find('#fcallback_form').html();

                console.log('callback_send');
                yaCounter97690.reachGoal('callback_send');
                _gaq.push(['_trackEvent', 'callback', 'send']);

                $('#fcallback_form').html('<div class="success" style="color: #000000;"><strong>Спасибо, что воспользовались формой заказа звонка на нашем сайте.</strong><br/>Наш менеджер свяжется с вами в ближайшее время!</div>');

                // Roistat Begin
                var rsForm = 'Заказать обратный звонок';
                var rsName = null;
                var rsPhone = null;
                var rsProductName = null;

                // - Получение форм
                $.each(self.serializeArray(), function() {
                    var field = $(this)[0];

                    switch (field.name) {
                        case 'name':
                            rsName = field.value;
                            break;
                        case 'phone':
                            rsPhone = field.value;
                            break;
                        case 'rsProductName':
                            rsProductName = field.value;
                            break;
                    }
                });

                var rsData = {
                    leadName: 'Заявка с "' + rsForm + '"',
                    name: rsName,
                    phone: rsPhone,
                    fields: {
                        643389: rsForm,
                        643391: rsProductName
                    }
                };

                // - Отправка
                if (rsName.length !== 0 && rsPhone.length !== 0) {
                    roistatGoal.reach(rsData);
                }
                // Roistat End

                return false;
            }
        });
    });

    $('#calculate').submit(function(e) {
        e.preventDefault();

        // Roistat begin
        var self = $(this);
        // Roistat end

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: $(this).serialize(),
            resetForm: 'true',
            success: function(output) {
                var data = $(output).find('#calculate_form').html();

                console.log('calculation_send');
                yaCounter97690.reachGoal('calculation_send');
                _gaq.push(['_trackEvent', 'calcform', 'send']);

                $('#calculate_form').html('<div class="success" style="color: #333;"><strong>Спасибо, что воспользовались формой расчета стоимости шкафа по Вашим размерам на нашем сайте.</strong><br/>Наш менеджер свяжется с вами в ближайшее время!</div>');

                // Roistat Begin
                var rsForm = 'Узнать базовую стоимость';
                var rsName = null;
                var rsPhone = null;
                var rsEmail = null;
                var rsSizeX = null;
                var rsSizeY = null;
                var rsSizeZ = null;
                var rsProductName = null;

                // - Получение форм
                $.each(self.serializeArray(), function() {
                    var field = $(this)[0];

                    switch (field.name) {
                        case 'name':
                            rsName = field.value;
                            break;
                        case 'phone':
                            rsPhone = field.value;
                            break;
                        case 'email':
                            rsEmail = field.value;
                            break;
                        case 'rsProductName':
                            rsProductName = field.value;
                            break;
                        case 'size_x':
                            rsSizeX = field.value;
                            break;
                        case 'size_y':
                            rsSizeY = field.value;
                            break;
                        case 'size_h':
                            rsSizeZ = field.value;
                            break;
                    }
                });

                var rsImgURL = window.location.hostname + '/' + $('.calc-over').eq(1).find('img').attr('src');

                var rsData = {
                    leadName: 'Заявка с "' + rsForm + '"',
                    name: rsName,
                    phone: rsPhone,
                    email: rsEmail,
                    text: 'Размер X: ' + rsSizeX + ', Размер Y: ' + rsSizeY + ', Высота: ' + rsSizeZ + ', Схема: ' + rsImgURL,
                    fields: {
                        643389: rsForm,
                        643391: rsProductName
                    }
                };

                // - Отправка
                if (rsSizeX.length !== 0 && rsSizeY.length !== 0 && (rsPhone.length !== 0 || rsEmail.length !== 0)) {
                    roistatGoal.reach(rsData);
                }
                // Roistat End

                return false;
            }
        });
    });

    $('#credit_calculate').submit(function(e) {
        e.preventDefault();

        // Roistat begin
        var self = $(this);
        // Roistat end

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: $(this).serialize(),
            resetForm: 'true',
            success: function(output) {
                var data = $(output).find('#calculate_form2').html();

                console.log('deffer_send');
                yaCounter97690.reachGoal('deffer_send');
                _gaq.push(['_trackEvent', 'defferform', 'send']);

                $('#calculate_form2').html('<div class="success" style="color: #333;"><strong>Спасибо, что воспользовались формой "Расчет стоимости шкафа по Вашим размерам по программе РАССРОЧКА 0%" на нашем сайте.</strong><br/>Наш менеджер свяжется с вами в ближайшее время!</div>');

                // Roistat Begin
                var rsForm = 'Рассрочка без процентов';
                var rsName = null;
                var rsPhone = null;
                var rsEmail = null;
                var rsSizeX = null;
                var rsSizeY = null;
                var rsSizeZ = null;
                var rsProductName = null;

                // - Получение форм
                $.each(self.serializeArray(), function() {
                    var field = $(this)[0];

                    switch (field.name) {
                        case 'name':
                            rsName = field.value;
                            break;
                        case 'phone':
                            rsPhone = field.value;
                            break;
                        case 'email':
                            rsEmail = field.value;
                            break;
                        case 'rsProductName':
                            rsProductName = field.value;
                            break;
                        case 'size_x':
                            rsSizeX = field.value;
                            break;
                        case 'size_y':
                            rsSizeY = field.value;
                            break;
                        case 'size_h':
                            rsSizeZ = field.value;
                            break;
                    }
                });

                var rsImgURL = window.location.hostname + '/' + $('.calc-over').eq(0).find('img').attr('src');

                var rsData = {
                    leadName: 'Заявка с "' + rsForm + '"',
                    name: rsName,
                    phone: rsPhone,
                    email: rsEmail,
                    text: 'Размер X: ' + rsSizeX + ', Размер Y: ' + rsSizeY + ', Высота: ' + rsSizeZ + ', Схема: ' + rsImgURL,
                    fields: {
                        643389: rsForm,
                        643391: rsProductName
                    }
                };

                // - Отправка
                if (rsSizeX.length !== 0 && rsSizeY.length !== 0 && (rsPhone.length !== 0 || rsEmail.length !== 0)) {
                    roistatGoal.reach(rsData);
                }
                // Roistat End

                return false;
            }
        });
    });
    $('#bottom_form').submit(function(e) {
        e.preventDefault();

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: $(this).serialize(),
            resetForm: 'true',
            success: function(output) {
                var data = $(output).find('#bf-form-wrap').html();
                $('#bf-form-wrap').html('<div id="bf_success" class="success"><p><strong>Спасибо, Ваш запрос отправлен!</strong><br>Наш менеджер свяжется с Вами в ближайшее время!</p></div>');
                try {
                    _gaq.push(['_trackEvent', 'ContactUs', 'send']);
                    //console.log('ContactUs');
                } catch (e) {
                    console.log(e);
                }
                return false;
            }
        });
    });
    $('#orderform').submit(function(e) {
        var formData = new FormData(this);
        e.preventDefault();

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: formData,
            processData: false,
            contentType: false,
            resetForm: 'true',
            success: function(output) {
                var data = $(output).find('#order_form').html();
                $('#order_form').html('<div id="of_success" class="success"><p><strong>Спасибо, Ваше письмо отправлено!</strong><br>Оно будет рассмотрено нашим менеджером в ближайшее время!</p></div>');
                try {
                    _gaq.push(['_trackEvent', 'WriteLetter', 'send']);
                    //console.log('WriteLetter');
                } catch (e) {
                    console.log(e);
                }
                return false;
            }
        });

        // Roistat Begin
        $.ajax({
            type: $(this).attr('method'),
            url: '//www.radius-line.ru/roistat/file.php',
            data: formData,
            processData: false,
            contentType: false,
            resetForm: 'true'
        });
        // Roistat End
    });
    var sendQuestion = function(e) {
        var formData = new FormData(this);
        e.preventDefault();
        var m_method = $(this).attr('method');
        var m_action = $(this).attr('action');
        //var m_data=$(this).serialize();

        // Roistat begin
        var self = $(this);
        // Roistat end

        $.ajax({
            type: m_method,
            url: m_action,
            data: formData,
            processData: false,
            contentType: false,
            resetForm: 'true',
            success: function(output) {
                var data = $(output).find('#kuhni').html();

                $('#kuhni').html(data);
                $('#question').submit(sendQuestion);
                if ($('#myFilesRow').length > 0) {
                    $('#myFilesRow input[type="file"]').each(function() {
                        if ($(this).attr('name') != 'atta_1') $(this).css('display', 'none');
                    });
                }

                // Roistat Begin
                var rsForm = 'Узнать базовую стоимость';
                var rsName = null;
                var rsPhone = null;
                var rsEmail = null;
                var rsComment = null;
                var rsProductName = null;

                // - Получение форм
                $.each(self.serializeArray(), function() {
                    var field = $(this)[0];

                    switch (field.name) {
                        case 'name':
                            rsName = field.value;
                            break;
                        case 'phone':
                            rsPhone = field.value;
                            break;
                        case 'email':
                            rsEmail = field.value;
                            break;
                        case 'rsProductName':
                            rsProductName = field.value;
                            break;
                        case 'message':
                            rsComment = field.value;
                            break;
                    }
                });

                var rsData = {
                    leadName: 'Заявка с "' + rsForm + '"',
                    name: rsName,
                    phone: rsPhone,
                    email: rsEmail,
                    text: rsComment,
                    fields: {
                        643389: rsForm,
                        643391: rsProductName
                    }
                };

                // - Отправка
                if (rsName.length !== 0 && rsComment.length !== 0 && (rsPhone.length !== 0 || rsEmail.length !== 0)) {
                    roistatGoal.reach(rsData);
                }

                return false;
            }
        });
    }
    $('#question').submit(sendQuestion);

    var sendCreditQuestion = function(e) {
        var formData = new FormData(this);
        e.preventDefault();
        var m_method = $(this).attr('method');
        var m_action = $(this).attr('action');
        //var m_data=$(this).serialize();

        console.log(formData);

        // Roistat begin
        var self = $(this);
        // Roistat end

        $.ajax({
            type: m_method,
            url: m_action,
            data: formData,
            processData: false,
            contentType: false,
            resetForm: 'true',
            success: function(output) {
                var data = $(output).find('#kuhni2').html();

                $('#kuhni2').html(data);
                $('#credit_question').submit(sendQuestion);
                if ($('#myFilesRow').length > 0) {
                    $('#myFilesRow input[type="file"]').each(function() {
                        if ($(this).attr('name') != 'atta_1') $(this).css('display', 'none');
                    });
                }

                // Roistat Begin
                var rsForm = 'Рассрочка без процентов';
                var rsName = null;
                var rsPhone = null;
                var rsEmail = null;
                var rsComment = null;
                var rsProductName = null;

                // - Получение форм
                $.each(self.serializeArray(), function() {
                    var field = $(this)[0];

                    switch (field.name) {
                        case 'name':
                            rsName = field.value;
                            break;
                        case 'phone':
                            rsPhone = field.value;
                            break;
                        case 'email':
                            rsEmail = field.value;
                            break;
                        case 'rsProductName':
                            rsProductName = field.value;
                            break;
                        case 'message':
                            rsComment = field.value;
                            break;
                    }
                });

                var rsData = {
                    leadName: 'Заявка с "' + rsForm + '"',
                    name: rsName,
                    phone: rsPhone,
                    email: rsEmail,
                    text: rsComment,
                    fields: {
                        643389: rsForm,
                        643391: rsProductName
                    }
                };

                // - Отправка
                if (rsName.length !== 0 && rsComment.length !== 0 && (rsPhone.length !== 0 || rsEmail.length !== 0)) {
                    roistatGoal.reach(rsData);
                }

                return false;
            }
        });
    }
    $('#credit_question').submit(sendCreditQuestion);

    $('#zamerschik_inline').submit(function(e) {
        e.preventDefault();

        var self = $(this);

        if ($(this).find('input:required').val().length == 0) {
            $(this).find('input:required').addClass('error').after('<div class="error-tip">заполните поле</div>');
            return false;
        }

        $.ajax({
            type: self.attr('method'),
            // url: self.attr('action'),
            url: '/#point_1',
            data: self.serialize(),
            resetForm: 'true',
            success: function(output) {
                var data = $(output).find('.get-measurer-form__body').html();

                try {
                    yaCounter97690.reachGoal('gager_send');
                    _gaq.push(['_trackEvent', 'gagerform', 'send']);
                    console.log('gager_send');

                } catch (e) {
                    console.error('Ошибка при отправке данных ' + e.message);

                }

                $('.get-measurer-form__body').html('<div class="success"><strong>Спасибо, что воспользовались формой вызова замерщика на нашем сайте.</strong><br/>Наш менеджер свяжется с вами в ближайшее время!</div>');


                return false;
            }
        });

        // Roistat Begin
        var rsForm = 'Вызвать замерщика';
        var rsName = null;
        var rsPhone = null;
        var rsProductName = null;

        // - Получение форм
        $.each($(this).serializeArray(), function() {
            var field = $(this)[0];

            switch (field.name) {
                case 'name':
                    rsName = field.value;
                    break;
                case 'phone':
                    rsPhone = field.value;
                    break;
                case 'rsProductName':
                    rsProductName = field.value;
                    break;
            }
        });

        // - Отправка
        roistatGoal.reach({
            leadName: 'Заявка с "' + rsForm + '"',
            name: rsName,
            phone: rsPhone,
            fields: {
                643389: rsForm,
                643391: rsProductName
            }
        });
        // Roistat End
    });


    $('#zamerschik').submit(function(e) {
        e.preventDefault();

        if ($(this).find('input:required').val().length == 0) {
            $(this).find('input:required').addClass('error').after('<div class="error-tip">заполните поле</div>');
            return false;
        }

        // Roistat begin
        var self = $(this);
        // Roistat end

        $.ajax({
            type: $(this).attr('method'),
            // url:  $(this).attr('action'),
            url: '/#point_268',
            data: $(this).serialize(),
            resetForm: 'true',
            success: function(output) {
                var data = $(output).find('#zamerschik_form').html();

                console.log('gager_send');
                yaCounter97690.reachGoal('gager_send');
                _gaq.push(['_trackEvent', 'gagerform', 'send']);

                $('#zamerschik_form').html('<div class="success" style="color: #000;"><strong>Спасибо, что воспользовались формой вызова замерщика на нашем сайте.</strong><br/>Наш менеджер свяжется с вами в ближайшее время!</div>');

                // Roistat Begin
                var rsForm = 'Вызвать замерщика';
                var rsName = null;
                var rsPhone = null;
                var rsProductName = null;

                // - Получение форм
                $.each(self.serializeArray(), function() {
                    var field = $(this)[0];

                    switch (field.name) {
                        case 'name':
                            rsName = field.value;
                            break;
                        case 'phone':
                            rsPhone = field.value;
                            break;
                        case 'rsProductName':
                            rsProductName = field.value;
                            break;
                    }
                });

                var rsData = {
                    leadName: 'Заявка с "' + rsForm + '"',
                    name: rsName,
                    phone: rsPhone,
                    fields: {
                        643389: rsForm,
                        643391: rsProductName
                    }
                };

                // - Отправка
                if (rsName.length !== 0 && rsPhone.length !== 0) {
                    roistatGoal.reach(rsData);
                }
                // Roistat End

                return false;
            }
        });
    });

    if ($('#myFilesRow').length > 0) {
        $('#myFilesRow input[type="file"]').each(function() {
            if ($(this).attr('name') != 'atta_1') $(this).css('display', 'none');
        });
    }

    /*setInterval(function(){
        $('.important-info ins').toggleClass('active');
    },1000);*/

    $('.slider-list').bxSlider({
        adaptiveHeight: true,
        auto: true
    });

    $('.slider-main-inner').bxSlider({
        adaptiveHeight: true,
        auto: true
    });


    $.mask.definitions['~']='[0-6,9]';
    $('input[name="fb_phone"], input#phone').mask('+7(~99)999-99-99');
    $('input[name="of_phone"]').mask('+7(~99)999-99-99');
    $('input#fphone').mask('+7(~99)999-99-99');
    $('input#zphone').mask('+7(~99)999-99-99');
    $('.calc-form-list input[name="phone"]').mask('+7(~99)999-99-99');

    /*if ( $("div").is("#bf_success") ){
    	setTimeout(function(){
    		var scrollTop = $('#bf_success').offset().top;
    		$('.block-calc2-form').hide();
    		$(document).scrollTop(scrollTop);
    	}, 1000);
    }*/

    if ($("div").is("#of_success")) {
        $(document).scrollTop(0);
        setTimeout(function() {
            $('.block-calc2-form').hide();
            $('.js_order-me').click();
            $(document).scrollTop(0);
        }, 500);
    }

    // $('.text').highlight('radius-line', { className: 'radius-hightlight' });

    // $('.radius-hightlight').each(function() {
    //     $(this).html('<span>R</span>adius-Line');
    // });

    $('.text').highlight('«Bellagio»', { className: 'bellagio-hightlight' });


    /*if($('.action-star').length > 0)
    {
    	$('.action-star').each(function(k, e) {
    		if($.cookie('data-star-' + $(e).attr('data-star')) == $(e).attr('data-document')) $(e).css('display', 'none');
    	});
    }*/

    /*$('.action-star').click(function() {
    	coo = getCoo();
    	
    	if(coo < 5) setCoo($(this).attr('data-star'), $(this).attr('data-document'));
    	
    	coo = getCoo();
    	
    	if(coo < 5)
    	{
    		$('#actionModal .modal-box').empty().append('<div style="text-align:center;"><p>Поздравляем!</p><p>Вы нашли часть скидки))!</p><p>Подробнее об акции <a href="/aktsiya-ot-kompanii-alru-radius-line.ru.html">тут</a></p><p>Продолжайте поиск!</p><p><a onclick="$(\'#actionModal\').fadeOut();" href="javascript:;">Закрыть</a></p></div>');
    	}
    	else
    	{
    		$('#actionModal .modal-box').empty().append(cooForm());
    	}
    	
    	$('#actionModal').fadeIn();
    	$(this).fadeOut();
    });*/

    $('.question-open').click(function() {
        $('#actionModal .modal-box').empty().append(questionForm());
        $('#actionModal').fadeIn();
    });

    // добавление контакта в Calltouch
    $('#fcallback, #zamerschik, #zamerschik_inline,  #calculate').submit(function() {
        console.log(0)
        var sub = '';
        if ($(this).attr('id') == 'fcallback') {
            sub = 'Заказать обратный звонок';
        } else if ($(this).attr('id') == 'zamerschik' || $(this).attr('id') == 'zamerschik_inline') {
            sub = 'Вызвать замерщика';
        } else if ($(this).attr('id') == 'calculate') {
            sub = 'Форма Калькулятор';
        }
        var fio = $(this).find('input[name="name"]').val();
        var phone = $(this).find('input[name="phone"]').val();
        var email = '';
        if ($(this).find('input[name="email"]').length > 0) {
            email = $(this).find('input[name="email"]').val();
        }
        send_to_calltouch(sub, fio, phone, email);
    });
    /* $('#kuhni').submit(function(e){
      e.preventDefault();
	  actionSubmit($(this).serialize());
   });*/
    $('#callback, #feedback').submit(function(e) {
        e.preventDefault();
        var sub = '';
        if ($(this).attr('id') == 'callback') {
            //console.log('События яндекса форма звонка');
            yaCounter97690.reachGoal('zakazat_zvonok/');

            sub = 'Заказать обратный звонок (Страница Цены)';
        } else if ($(this).attr('id') == 'feedback') {
            //console.log('События яндекса форма письма');
            yaCounter97690.reachGoal('spasibo_za_pismo/');

            sub = 'Форма Напиши директору';
        } else if ($(this).attr('id') == 'kuhni') {
            //console.log('События яндекса форма письма');
            yaCounter97690.reachGoal('spasibo_za_pismo/');

            sub = 'Форма Рассчитать базовую стоимость кухни';
        }
        var fio = $(this).find('input[name="name"]').val();
        var phone = $(this).find('input[name="phone"]').val();
        var email = '';
        if ($(this).find('input[name="email"]').length > 0) {
            email = $(this).find('input[name="email"]').val();
        }
        send_to_calltouch(sub, fio, phone, email);

        // Roistat Begin
        var rsForm = null;
        var rsName = null;
        var rsPhone = null;
        var rsEmail = null;
        var rsMessage = null;

        switch (sub) {
            case 'Заказать обратный звонок (Страница Цены)':
                rsForm = 'Заказать обратный звонок';
                break;
            case 'Форма Напиши директору':
                rsForm = 'Задать вопрос';
                break;
            default:
                rsForm = sub;
                break;
        }

        // - Получение форм
        $.each($(this).serializeArray(), function() {
            var field = $(this)[0];

            switch (field.name) {
                case 'name':
                    rsName = field.value;
                    break;
                case 'phone':
                    rsPhone = field.value;
                    break;
                case 'email':
                    rsEmail = field.value;
                    break;
                case 'message':
                    rsMessage = field.value;
                    break;
            }
        });

        var rsData = {
            leadName: 'Заявка с "' + rsForm + '"',
            name: rsName,
            phone: rsPhone,
            email: rsEmail,
            text: rsMessage,
            fields: {
                643389: rsForm
            }
        };

        // - Отправка
        switch (rsForm) {
            case 'Задать вопрос':
                if (rsName.length !== 0 && rsEmail.length !== 0 && rsMessage.length !== 0) {
                    let formData = new FormData(this);
                    $.ajax({
                        type: $(this).attr('method'),
                        url: '//www.radius-line.ru/roistat/file.php',
                        data: formData,
                        processData: false,
                        contentType: false,
                    });
                }
                break;
            case 'Заказать обратный звонок':
                if (rsName.length !== 0 && rsPhone.length !== 0) {
                    roistatGoal.reach(rsData);
                }
                break;
        }
        // Roistat End

        var el = $(this);
        // actionSubmit($('#questionForm').serialize());
        setTimeout(function() {
            el.unbind('submit');
            el.submit();
        }, 1000);
    });

    setTimeout(function() {
        $('#cbkPhoneBtn').click(function() {
            var sub = 'Форма Перезвоним за 24 секунды';
            var phone = $(this).prev().prev().val();
            send_to_calltouch(sub, '', phone, '');
        });
        $('#cbkPhoneInput').keyup(function(e) {
            // enter
            if (e.keyCode == 13) {
                var sub = 'Форма Перезвоним за 24 секунды';
                var phone = $(this).val();
                send_to_calltouch(sub, '', phone, '');
            }
        });
    }, 5000);

});

function send_to_calltouch(sub, fio, phone, email) {
    if (phone != '') {
        jQuery.getJSON('https://api-node1.calltouch.ru/calls-service/RestAPI/943/requests/orders/register/', {
            subject: sub,
            fio: fio,
            phoneNumber: phone,
            email: email,
            sessionId: window.call_value_1
        });
    }
}

function actionSubmit(s) {
    $.ajax({
        type: 'POST',
        url: '/action-ajax.php',
        data: s,
        success: function(output) {
            o = $.parseJSON(output);
            if (o.type == 'success') $('#actionModal form').hide();
            $('#actionModal .ajax-results').empty().append(o.message);
        }
    });
}

function addFileButton() {
    k = 0;

    $('#myFilesRow input[type="file"]:visible').each(function() {
        name = $(this).attr('name');

        num = parseInt(name.replace(/atta_/, ''));

        if (num + 1 > k)
            k = num + 1;
        //console.log(k);
    });

    if ($('#myFilesRow input[name="atta_' + k + '"]').length > 0) {
        $('#myFilesRow input[name="atta_' + k + '"]').show();
    }
}

function getCoo() {
    count = 0;

    if ($.cookie('data-star-1') != null && count < 5) count++;
    if ($.cookie('data-star-2') != null && count < 5) count++;
    if ($.cookie('data-star-3') != null && count < 5) count++;
    if ($.cookie('data-star-4') != null && count < 5) count++;
    if ($.cookie('data-star-5') != null && count < 5) count++;

    return count;
}

function setCoo(star, document) {
    if (getCoo() < 5) $.cookie('data-star-' + star, document, { expires: 7, path: '/' });
}

function cooForm() {
    return ('\
		<form method="post" id="actionForm">\
			<input type="hidden" name="action" value="actionSubmit"/>\
			<p>Поздравляем! Вы собрали свою скидку, заполните поля ниже и Вам на почту сразу придет код скидки.</p>\
			<p><label>Ваше имя*</label><br/><input type="text" name="name"/></p>\
			<p><label>Email*</label><br/><input type="text" name="email"/></p>\
			<p><label>Контактный телефон</label><br/><input type="text" name="phone"/></p>\
			<p><label>Откуда о нас узнали*</label><br/><input type="checkbox" name="where[]" value="Google"/> Google<br/><input type="checkbox" name="where[]" value="Yandex"/> Yandex<br/><input type="checkbox" name="where[]" value="Советы друзей"/> Советы друзей<br/><input type="checkbox" name="where[]" value="Журналы"/> Журналы<br/><input type="checkbox" name="where[]" value="Торговые центры"/> Торговые центры<br/><input type="checkbox" name="where[]" value="Другое"/> Другое<br/></p>\
			<p>*обязательно для заполнения</p>\
			<p><a onclick="$(\'#actionModal\').fadeOut();" href="javascript:;">Закрыть</a> <a href="javascript:;" onclick="actionSubmit($(\'#actionForm\').serialize());">Отправить</a></p>\
		</form>\
		<div class="ajax-results"></div>\
	');
}

function questionForm() {
    return ('\
		<form method="post" id="questionForm">\
			<input type="hidden" name="action" value="questionSubmit"/>\
			<p><label>Ваше имя*</label><br/><input type="text" name="name"/></p>\
			<p><label>Email*</label><br/><input type="text" name="email"/></p>\
			<p><label>Контактный телефон</label><br/><input type="text" name="phone"/></p>\
			<p><label>Ваш вопрос*</label><br/><textarea style="width: calc(100% - 6px);" name="question"></textarea></p>\
			<p>*обязательно для заполнения</p>\
			<p><a onclick="$(\'#actionModal\').fadeOut();" href="javascript:;">Закрыть</a> <a href="javascript:;" onclick="actionSubmit($(\'#questionForm\').serialize());">Отправить</a></p>\
		</form>\
		<div class="ajax-results"></div>\
	');
}

function createBookmark(sURL, sTitle) {
    if (document.all && window.external) {
        window.external.AddFavorite(sURL, sTitle);
    } else if (window.sidebar) {
        window.sidebar.addPanel(sTitle, sURL, '');
    } else {
        alert('Невозможно создать закладку!\n' + 'Нажмите Ctrl-D чтобы добавить страницу в закладки');
    }
}

function modalWindow() {
    var a = $(".js_dialog"),
        b = a.outerWidth(),
        c = a.outerHeight(),
        d = $(window).width(),
        e = $(window).height();
    a.css({
        left: d / 2 - b / 2,
        top: e / 2 - c / 2
    })

    var a = $(".js_dialog_order"),
        b = a.outerWidth(),
        c = a.outerHeight(),
        d = $(window).width(),
        e = $(window).height();
    a.css({
        left: d / 2 - b / 2,
        top: e / 2 - c / 2
    })
}

/*function getFileName(formName) {
    var file = document.getElementById('of_file').value;
    file = file.replace(/\\/g, '/').split('/').pop();

    if (file != '') {
        document.getElementById('of_file_wrap').className = "file_select";
        document.getElementById('of_file_name').innerHTML = 'Выбран файл: ' + file;
    } else {
        document.getElementById('of_file_wrap').className = "";
        document.getElementById('of_file_name').innerHTML = 'Выберите файл';
    }

    if (formName == 'feedback') {

        var fileFeedBack = document.getElementById('feedback-file-input').value;
        fileFeedBack = fileFeedBack.replace(/\\/g, '/').split('/').pop();

        if (fileFeedBack != '') {
            document.getElementById('feedback_file_name').innerHTML = 'Выбран файл: ' + fileFeedBack;
        } else {
            document.getElementById('feedback_file_name').innerHTML = 'Выберите файл';
        }
    }

}*/

function getFileName(number) {
    var fileWrap = document.getElementById('file_' + number);
    var fileElem = fileWrap.getElementsByClassName('of_file');
    var file = fileElem[0].value;
    file = file.replace(/\\/g, '/').split('/').pop();
    if (file != '') {
        fileWrap.className = "of_file_wrap file_select";
        fileWrap.getElementsByClassName('of_file_name')[0].innerHTML = 'Выбран файл: ' + file;
    } else {
        fileWrap.className = "of_file_wrap";
        fileWrap.getElementsByClassName('of_file_name')[0].innerHTML = 'Выберите файл';
    }
}

function getFeedbackFileName() {
    var fileFeedBack = document.getElementById('feedback-file-input').value;
    fileFeedBack = fileFeedBack.replace(/\\/g, '/').split('/').pop();

    if (fileFeedBack != '') {
        document.getElementById('feedback_file_name').innerHTML = 'Выбран файл: ' + fileFeedBack;
    } else {
        document.getElementById('feedback_file_name').innerHTML = 'Выберите файл';
    }
}

$(document).ready(function() {
    modalWindow();
    console.log(window.location.pathname);
    if (window.location.href.indexOf('#f') > -1 || window.location.href.indexOf('#point') > -1) {
        $('.block-calc2-form').slideDown();
    }

    if (window.location.pathname != '/kontaktyi.html') {
        // $("a:contains(подробнее)").addClass('showmore').wrap('<div class="catalog-item-btns">');
        // $('table.case_hover_ux .showmore').before('<a class="catalog-item-calc-btn">Рассчитать стоимость</a>');

        // $('table.case_hover_ux td > div > a.highslide + .catalog-list-title').each(function() {
        //     console.log($(this).text());
        // });

    }




    $(".js_call-me").click(function(a) {
        $(".js_call-modal").fadeIn(), $(".dialog-overlay").fadeIn(), a.preventDefault()
    });
    $(".js_order-me, .popular-goods-calc-price, .catalog-item-calc-btn").click(function(a) {
        a.stopImmediatePropagation();
        $(".js_order-modal").fadeIn(), $(".dialog-overlay").fadeIn(), a.preventDefault()
    });
    $(".js_call-to").click(function(a) {
        $(".js_callto-modal").fadeIn(), $(".dialog-overlay").fadeIn(), a.preventDefault()
    });
    $(".js_close").on("click", function() {
        $(this).closest(".dialog-wrap").fadeOut(), $(".dialog-overlay").fadeOut()
    });
    $("body").on("click", ".dialog-overlay", function(a) {
        $(".js_dialog").fadeOut(), $(this).fadeOut(), a.preventDefault()
    })
});

$(window).load(function() {

    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 130,
        itemMargin: 5,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
    });

});

jQuery(document).ready(function() {

    if (history.length > 1) {
        $('.javascript-back').attr('href', 'javascript:history.go(-1);');
    } else {
        $('.javascript-back').hide();
    }

    //console.log(history.length);

    $('.javascript-back').click(function() {

    });

    $('#calculate [type="submit"]').click(function() {
        if ($('#calculate [name="size_x"]').val() == '') {
            alert('Пожалуйста, заполните поле "Размер X"');
            return false;
        }

        if ($('#calculate [name="size_y"]').val() == '') {
            alert('Пожалуйста, заполните поле "Размер Y"');
            return false;
        }

        if ($('#calculate [name="name"]').val() == '') {
            alert('Пожалуйста, заполните поле "Ваше имя"');
            return false;
        }

        if ($('#calculate [name="email"]').val() == '' && $('#calculate [name="phone"]').val() == '') {
            alert('Пожалуйста, заполните одно из полей "Телефон" или "E-mail"');
            return false;
        }

        return true;
    });

    $('#credit_calculate [type="submit"]').click(function() {
        if ($('#credit_calculate [name="size_x"]').val() == '') {
            alert('Пожалуйста, заполните поле "Размер X"');
            return false;
        }

        if ($('#credit_calculate [name="size_y"]').val() == '') {
            alert('Пожалуйста, заполните поле "Размер Y"');
            return false;
        }

        if ($('#credit_calculate [name="name"]').val() == '') {
            alert('Пожалуйста, заполните поле "Ваше имя"');
            return false;
        }

        if ($('#credit_calculate [name="email"]').val() == '' && $('#credit_calculate [name="phone"]').val() == '') {
            alert('Пожалуйста, заполните одно из полей "Телефон" или "E-mail"');
            return false;
        }

        return true;
    });

    $('#bottom_form [type="submit"]').click(function() {
        if ($('#bottom_form [name="fb_name"]').val() == '' && $('#bottom_form [name="fb_phone"]').val() == '') {
            alert('Пожалуйста, заполните поля "Ваше имя" и "Телефон"');
            return false;
        }
        if ($('#bottom_form [name="fb_name"]').val() == '') {
            alert('Пожалуйста, заполните поле "Ваше имя"');
            return false;
        }
        if ($('#bottom_form [name="fb_phone"]').val() == '') {
            alert('Пожалуйста, заполните поле "Телефон"');
            return false;
        }

        return true;
    });

    $('#question [type="submit"]').click(function() {
        if ($('#question [name="message"]').val() == '') {
            alert('Пожалуйста, заполните поле "Ваш вопрос"');
            return false;
        }
        if ($('#question [name="name"]').val() == '') {
            alert('Пожалуйста, заполните поле "Ваше имя"');
            return false;
        }
        if ($('#question [name="phone"]').val() == '' && $('#question [name="email"]').val() == '') {
            alert('Пожалуйста, заполните одно из полей "Телефон" или "E-mail"');
            return false;
        }
    });

    $('#credit_question [type="submit"]').click(function() {
        if ($('#credit_question [name="message"]').val() == '') {
            alert('Пожалуйста, заполните поле "Ваш вопрос"');
            return false;
        }
        if ($('#credit_question [name="name"]').val() == '') {
            alert('Пожалуйста, заполните поле "Ваше имя"');
            return false;
        }
        if ($('#credit_question [name="phone"]').val() == '' && $('#credit_question [name="email"]').val() == '') {
            alert('Пожалуйста, заполните одно из полей "Телефон" или "E-mail"');
            return false;
        }
    });

    $('#fcallback [type="submit"]').click(function() {

        if ($('#fcallback [name="name"]').val() == '') {
            $('#fcallback [name="name"]').addClass('error').after('<div class="error-tip">заполните поле</div>');
            return false;
        }
        if ($('#fcallback [name="phone"]').val() == '') {
            $('#fcallback [name="phone"]').addClass('error').after('<div class="error-tip">заполните поле</div>');
            return false;
        }
    });

    $('#orderform [type="submit"]').click(function() {

        if ($('#orderform [name="of_name"]').val() == '') {
            $('#orderform [name="of_name"]').addClass('error').after('<div class="error-tip">заполните поле</div>');
            return false;
        }

        if ($('#orderform [name="of_email"]').val() == '') {
            $('#orderform [name="of_email"]').addClass('error').after('<div class="error-tip">заполните поле</div>');
            return false;
        }
    });



});


$(document).ready(function() {
    $('a[fix-width="1"]').parent('li').hover(function() {
        var a1 = $(this).children('ul.dropdown-menu').width();
        var a2 = $('.nav-wrap').width() - $(this).position().left;

        if (a2 != a1) {
            $('ul.dropdown-menu > li', this).css({
                'min-width': a2 + "px",
                'width': a2 + "px"
            });
            /*console.log( a1 + " != " + a2 );
            console.log( a2 + "px" );*/
        }
    });

    if ($(window).width() < 981) {
        $('body').addClass('on-phablet');
    }

    $('.files .add-file').click(function() {
        $(this).parent('.files').children('.of_file_wrap.hide').first().removeClass('hide');
        if ($(this).parent('.files').children('.of_file_wrap.hide').length == 0) {
            $(this).hide();
        }
    });
});

// Roistat Begin
(function(w, d, s, h, id) {
    w.roistatProjectId = id;
    w.roistatHost = h;
    var p = d.location.protocol == "https:" ? "https://" : "http://";
    var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/" + id + "/init";
    var js = d.createElement(s);
    js.charset = "UTF-8";
    js.async = 1;
    js.src = p + h + u;
    var js2 = d.getElementsByTagName(s)[0];
    js2.parentNode.insertBefore(js, js2);
})(window, document, 'script', 'cloud.roistat.com', 'acc61f00a86f02c54b68593653b50cfc');

if ($('h1[id^="point_"]').length) {
    $.each($('form'), function() {
        $(this).append('<input type="hidden" name="rsProductName" value="' + $('h1[id^="point_"]').text().trim() + '" />');
    });
}
// Roistat End



// UX


$(document).ready(function() {

    $('nav .parent').hover(
        function() {
            $('.bg-fade').show();
        },
        function() {
            $('.bg-fade').hide();
        }
    );

    $('.popular-goods').bxSlider({
        infiniteLoop: true,
        auto: true,
        autoHover: true,
    });


    $('.slider-list-inner').bxSlider({
        auto: true,
        autoHover: true,
        controls: false
    });


    $('.we-make__img').each(function() {
        var imgSrc = $(this).find('img').hide().attr('src');
        $(this).css('background-image', 'url("' + imgSrc + '")');
    })

    var headerHeight = $('header').height();

    var pageHeight = $(document).height() - 480;
    var clientHeight = $(window).height();
    var scrollEnd = pageHeight - clientHeight;

    $(window).scroll(function() {

        if (window.scrollY >= scrollEnd) {
            $('.to-top-btn').addClass('to-top-end');
        } else {
            $('.to-top-btn').removeClass('to-top-end');
        }

        if ($(this).scrollTop() > 250) {
            $('.to-top-btn').fadeIn();
            $('header').addClass('fixed');
            $('.wrapper').css('padding-top', headerHeight);
        } else {
            $('.to-top-btn').fadeOut();
            $('header').removeClass('fixed');
            $('.wrapper').css('padding-top', '0');
        }
    })

    $('.to-top-btn').on('click', function() {
        $('body, html').animate({
            'scrollTop': 0
        });
    });

    $('.metro-station-list a').each(function() {
        var that = $(this);
        var anchor = that.attr('href').slice(15);

        $(that).click(function(evt) {

            var destination = $('a[name=' + anchor + ']').offset().top;

            $('body, html').animate({ scrollTop: destination - headerHeight }, 1000);
            return false;

        });

    });

    $('.calc-form-list input[name="size_x"], .calc-form-list input[name="size_y"], .calc-form-list input[name="size_h"]').parent('li').addClass('short_width');



    $('form input').keyup(function() {
        $(this).removeClass('error');
    });

    // Скрываем сноску, если нет "*" в цене товара
    var priceData = $('.product-price-data').text();

    if (priceData.indexOf('*') >= 0) {
        $('.product-price-tip').fadeIn();
    }


    $('.slider-main__item').each(function() {
        var img = $(this).find('img');
        $(this).css('background-image', 'url(' + img.attr('src') + ')');
        img.remove();
    });

    $('.slider-more-btn').each(function() {
        var link;
        var parent = $(this).parents('.slider-main__item');

        if ($(this).text().length < 1) {
            $(this).hide();
        } else {
            if ($(this).attr('href').length > 0) {
                link = $(this).attr('href');
                parent.addClass('has_link');
                parent.click(function() {
                    location.href = link;
                });
            }
        }
    });


    $('.catalog-item-meta').each(function() {
        var link = $(this).find('.catalog-item-more').attr('href');
        if (link.length > 0) {
            $(this).click(function() {
                location.href = link;
            });
        }
    });


    $('span, p').each(function() {
        if ($(this).attr('style') == 'color: #bfc65d;' || $(this).attr('style') == 'color: #bec55d;' || $(this).attr('style') == 'color: #b8c559;') {
            $(this).removeAttr('style');
            $(this).css('color', '#5f7912');
        }
    })
});
