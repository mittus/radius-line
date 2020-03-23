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
        var self_serialize = self.serializeArray();
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
                gtag('event', 'send', {'event_category': 'callback'});

                $('#fcallback_form').html('<div class="success" style="color: #000000;"><strong>РЎРїР°СЃРёР±Рѕ, С‡С‚Рѕ РІРѕСЃРїРѕР»СЊР·РѕРІР°Р»РёСЃСЊ С„РѕСЂРјРѕР№ Р·Р°РєР°Р·Р° Р·РІРѕРЅРєР° РЅР° РЅР°С€РµРј СЃР°Р№С‚Рµ.</strong><br/>РќР°С€ РјРµРЅРµРґР¶РµСЂ СЃРІСЏР¶РµС‚СЃСЏ СЃ РІР°РјРё РІ Р±Р»РёР¶Р°Р№С€РµРµ РІСЂРµРјСЏ!</div>');

                // Roistat Begin
                var rsForm = 'Р—Р°РєР°Р·Р°С‚СЊ РѕР±СЂР°С‚РЅС‹Р№ Р·РІРѕРЅРѕРє';
                var rsName = null;
                var rsPhone = null;
                var rsProductName = null;

                // - РџРѕР»СѓС‡РµРЅРёРµ С„РѕСЂРј
                $.each(self_serialize, function() {
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
                    leadName: 'Р—Р°СЏРІРєР° СЃ "' + rsForm + '"',
                    name: rsName,
                    phone: rsPhone,
                    fields: {
                        643389: rsForm,
                        643391: rsProductName
                    }
                };

                // - РћС‚РїСЂР°РІРєР°
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
        var self_serialize = self.serializeArray();
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
                gtag('event', 'send', {'event_category': 'calcform'});

                $('#calculate_form').html('<div class="success" style="color: #333;"><strong>РЎРїР°СЃРёР±Рѕ, С‡С‚Рѕ РІРѕСЃРїРѕР»СЊР·РѕРІР°Р»РёСЃСЊ С„РѕСЂРјРѕР№ СЂР°СЃС‡РµС‚Р° СЃС‚РѕРёРјРѕСЃС‚Рё С€РєР°С„Р° РїРѕ Р’Р°С€РёРј СЂР°Р·РјРµСЂР°Рј РЅР° РЅР°С€РµРј СЃР°Р№С‚Рµ.</strong><br/>РќР°С€ РјРµРЅРµРґР¶РµСЂ СЃРІСЏР¶РµС‚СЃСЏ СЃ РІР°РјРё РІ Р±Р»РёР¶Р°Р№С€РµРµ РІСЂРµРјСЏ!</div>');

                // Roistat Begin
                var rsForm = 'РЈР·РЅР°С‚СЊ Р±Р°Р·РѕРІСѓСЋ СЃС‚РѕРёРјРѕСЃС‚СЊ';
                var rsName = null;
                var rsPhone = null;
                var rsEmail = null;
                var rsSizeX = null;
                var rsSizeY = null;
                var rsSizeZ = null;
                var rsProductName = null;

                // - РџРѕР»СѓС‡РµРЅРёРµ С„РѕСЂРј
                $.each(self_serialize, function() {
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
                    leadName: 'Р—Р°СЏРІРєР° СЃ "' + rsForm + '"',
                    name: rsName,
                    phone: rsPhone,
                    email: rsEmail,
                    text: 'Р Р°Р·РјРµСЂ X: ' + rsSizeX + ', Р Р°Р·РјРµСЂ Y: ' + rsSizeY + ', Р’С‹СЃРѕС‚Р°: ' + rsSizeZ + ', РЎС…РµРјР°: ' + rsImgURL,
                    fields: {
                        643389: rsForm,
                        643391: rsProductName
                    }
                };

                // - РћС‚РїСЂР°РІРєР°
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
        var self_serialize = self.serializeArray();
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
                gtag('event', 'send', {'event_category': 'defferform'});

                $('#calculate_form2').html('<div class="success" style="color: #333;"><strong>РЎРїР°СЃРёР±Рѕ, С‡С‚Рѕ РІРѕСЃРїРѕР»СЊР·РѕРІР°Р»РёСЃСЊ С„РѕСЂРјРѕР№ "Р Р°СЃС‡РµС‚ СЃС‚РѕРёРјРѕСЃС‚Рё С€РєР°С„Р° РїРѕ Р’Р°С€РёРј СЂР°Р·РјРµСЂР°Рј РїРѕ РїСЂРѕРіСЂР°РјРјРµ Р РђРЎРЎР РћР§РљРђ 0%" РЅР° РЅР°С€РµРј СЃР°Р№С‚Рµ.</strong><br/>РќР°С€ РјРµРЅРµРґР¶РµСЂ СЃРІСЏР¶РµС‚СЃСЏ СЃ РІР°РјРё РІ Р±Р»РёР¶Р°Р№С€РµРµ РІСЂРµРјСЏ!</div>');

                // Roistat Begin
                var rsForm = 'Р Р°СЃСЃСЂРѕС‡РєР° Р±РµР· РїСЂРѕС†РµРЅС‚РѕРІ';
                var rsName = null;
                var rsPhone = null;
                var rsEmail = null;
                var rsSizeX = null;
                var rsSizeY = null;
                var rsSizeZ = null;
                var rsProductName = null;

                // - РџРѕР»СѓС‡РµРЅРёРµ С„РѕСЂРј
                $.each(self_serialize, function() {
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
                    leadName: 'Р—Р°СЏРІРєР° СЃ "' + rsForm + '"',
                    name: rsName,
                    phone: rsPhone,
                    email: rsEmail,
                    text: 'Р Р°Р·РјРµСЂ X: ' + rsSizeX + ', Р Р°Р·РјРµСЂ Y: ' + rsSizeY + ', Р’С‹СЃРѕС‚Р°: ' + rsSizeZ + ', РЎС…РµРјР°: ' + rsImgURL,
                    fields: {
                        643389: rsForm,
                        643391: rsProductName
                    }
                };

                // - РћС‚РїСЂР°РІРєР°
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
                $('#bf-form-wrap').html('<div id="bf_success" class="success"><p><strong>РЎРїР°СЃРёР±Рѕ, Р’Р°С€ Р·Р°РїСЂРѕСЃ РѕС‚РїСЂР°РІР»РµРЅ!</strong><br>РќР°С€ РјРµРЅРµРґР¶РµСЂ СЃРІСЏР¶РµС‚СЃСЏ СЃ Р’Р°РјРё РІ Р±Р»РёР¶Р°Р№С€РµРµ РІСЂРµРјСЏ!</p></div>');
                try {
                    gtag('event', 'send', {'event_category': 'ContactUs'});
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
                $('#order_form').html('<div id="of_success" class="success"><p><strong>РЎРїР°СЃРёР±Рѕ, Р’Р°С€Рµ РїРёСЃСЊРјРѕ РѕС‚РїСЂР°РІР»РµРЅРѕ!</strong><br>РћРЅРѕ Р±СѓРґРµС‚ СЂР°СЃСЃРјРѕС‚СЂРµРЅРѕ РЅР°С€РёРј РјРµРЅРµРґР¶РµСЂРѕРј РІ Р±Р»РёР¶Р°Р№С€РµРµ РІСЂРµРјСЏ!</p></div>');
                try {
                    gtag('event', 'send', {'event_category': 'WriteLetter'});
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

    $('#letterform').submit(function(e) {

    	if ($('#letterform [name="lf_name"]').val() == '') {
            $('#letterform [name="lf_name"]').addClass('error').after('<div class="error-tip">Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ</div>');
            return false;
        }
        if ($('#letterform [name="lf_email"]').val() == '') {
            $('#letterform [name="lf_email"]').addClass('error').after('<div class="error-tip">Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ</div>');
            return false;
        }

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
                var data = $(output).find('#letter_form').html();
                $('#letter_form').html('<div id="of_success" class="success"><p><strong>РЎРїР°СЃРёР±Рѕ, Р’Р°С€Рµ РїРёСЃСЊРјРѕ РѕС‚РїСЂР°РІР»РµРЅРѕ!</strong><br>РћРЅРѕ Р±СѓРґРµС‚ СЂР°СЃСЃРјРѕС‚СЂРµРЅРѕ РЅР°С€РёРј РјРµРЅРµРґР¶РµСЂРѕРј РІ Р±Р»РёР¶Р°Р№С€РµРµ РІСЂРµРјСЏ!</p></div>');
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
        var self_serialize = self.serializeArray();
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
                var rsForm = 'РЈР·РЅР°С‚СЊ Р±Р°Р·РѕРІСѓСЋ СЃС‚РѕРёРјРѕСЃС‚СЊ';
                var rsName = null;
                var rsPhone = null;
                var rsEmail = null;
                var rsComment = null;
                var rsProductName = null;

                // - РџРѕР»СѓС‡РµРЅРёРµ С„РѕСЂРј
                $.each(self_serialize, function() {
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
                    leadName: 'Р—Р°СЏРІРєР° СЃ "' + rsForm + '"',
                    name: rsName,
                    phone: rsPhone,
                    email: rsEmail,
                    text: rsComment,
                    fields: {
                        643389: rsForm,
                        643391: rsProductName
                    }
                };

                // - РћС‚РїСЂР°РІРєР°
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
        var self_serialize = self.serializeArray();
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
                var rsForm = 'Р Р°СЃСЃСЂРѕС‡РєР° Р±РµР· РїСЂРѕС†РµРЅС‚РѕРІ';
                var rsName = null;
                var rsPhone = null;
                var rsEmail = null;
                var rsComment = null;
                var rsProductName = null;

                // - РџРѕР»СѓС‡РµРЅРёРµ С„РѕСЂРј
                $.each(self_serialize, function() {
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
                    leadName: 'Р—Р°СЏРІРєР° СЃ "' + rsForm + '"',
                    name: rsName,
                    phone: rsPhone,
                    email: rsEmail,
                    text: rsComment,
                    fields: {
                        643389: rsForm,
                        643391: rsProductName
                    }
                };

                // - РћС‚РїСЂР°РІРєР°
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
        var self_serialize = self.serializeArray();

        if ($(this).find('input:required').val().length == 0) {
            $(this).find('input:required').addClass('error').after('<div class="error-tip">Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ</div>');
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
                    gtag('event', 'send', {'event_category': 'gagerform'});
                    console.log('gager_send');

                } catch (e) {
                    console.error('РћС€РёР±РєР° РїСЂРё РѕС‚РїСЂР°РІРєРµ РґР°РЅРЅС‹С… ' + e.message);

                }

                $('.get-measurer-form__body').html('<div class="success"><strong>РЎРїР°СЃРёР±Рѕ, С‡С‚Рѕ РІРѕСЃРїРѕР»СЊР·РѕРІР°Р»РёСЃСЊ С„РѕСЂРјРѕР№ РІС‹Р·РѕРІР° Р·Р°РјРµСЂС‰РёРєР° РЅР° РЅР°С€РµРј СЃР°Р№С‚Рµ.</strong><br/>РќР°С€ РјРµРЅРµРґР¶РµСЂ СЃРІСЏР¶РµС‚СЃСЏ СЃ РІР°РјРё РІ Р±Р»РёР¶Р°Р№С€РµРµ РІСЂРµРјСЏ!</div>');


                return false;
            }
        });

        // Roistat Begin
        var rsForm = 'Р’С‹Р·РІР°С‚СЊ Р·Р°РјРµСЂС‰РёРєР°';
        var rsName = null;
        var rsPhone = null;
        var rsProductName = null;

        // - РџРѕР»СѓС‡РµРЅРёРµ С„РѕСЂРј
        $.each(self_serialize, function() {
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

        // - РћС‚РїСЂР°РІРєР°
        roistatGoal.reach({
            leadName: 'Р—Р°СЏРІРєР° СЃ "' + rsForm + '"',
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
            $(this).find('input:required').addClass('error').after('<div class="error-tip">Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ</div>');
            return false;
        }

        // Roistat begin
        var self = $(this);
        var self_serialize = self.serializeArray();
        // Roistat end

        $ajaxUrl = $(this).attr('action');
        if ($ajaxUrl == "index.html#point_1") {
            $ajaxUrl = "/#point_1";
        }

        $.ajax({
            type: $(this).attr('method'),
            // url:  $(this).attr('action'),
            url: $ajaxUrl,
            data: $(this).serialize(),
            resetForm: 'true',
            success: function(output) {
                var data = $(output).find('#zamerschik_form').html();

                console.log('gager_send');
                yaCounter97690.reachGoal('gager_send');
                gtag('event', 'send', {'event_category': 'gagerform'});

                $('#zamerschik_form').html('<div class="success" style="color: #000;"><strong>РЎРїР°СЃРёР±Рѕ, С‡С‚Рѕ РІРѕСЃРїРѕР»СЊР·РѕРІР°Р»РёСЃСЊ С„РѕСЂРјРѕР№ РІС‹Р·РѕРІР° Р·Р°РјРµСЂС‰РёРєР° РЅР° РЅР°С€РµРј СЃР°Р№С‚Рµ.</strong><br/>РќР°С€ РјРµРЅРµРґР¶РµСЂ СЃРІСЏР¶РµС‚СЃСЏ СЃ РІР°РјРё РІ Р±Р»РёР¶Р°Р№С€РµРµ РІСЂРµРјСЏ!</div>');

                // Roistat Begin
                var rsForm = 'Р’С‹Р·РІР°С‚СЊ Р·Р°РјРµСЂС‰РёРєР°';
                var rsName = null;
                var rsPhone = null;
                var rsProductName = null;

                // - РџРѕР»СѓС‡РµРЅРёРµ С„РѕСЂРј
                $.each(self_serialize, function() {
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
                    leadName: 'Р—Р°СЏРІРєР° СЃ "' + rsForm + '"',
                    name: rsName,
                    phone: rsPhone,
                    fields: {
                        643389: rsForm,
                        643391: rsProductName
                    }
                };

                // - РћС‚РїСЂР°РІРєР°
                if (rsName.length !== 0 && rsPhone.length !== 0) {
                    roistatGoal.reach(rsData);
                }
                // Roistat End

                return false;
            }
        });
    });

    /* start calc cost send */

    $('#calculate_cost').submit(function(e) {
        e.preventDefault();
        var error = false;

        if ($('#calculate_cost [name="size_x"]').val() == '') {
            $('#calculate_cost [name="size_x"]').addClass('error').after('<div class="error-tip">Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ</div>');
            var error = true;
        }
        if ($('#calculate_cost [name="size_y"]').val() == '') {
            $('#calculate_cost [name="size_y"]').addClass('error').after('<div class="error-tip">Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ</div>');
            var error = true;
        }
        if ($('#calculate_cost [name="name"]').val() == '') {
            $('#calculate_cost [name="name"]').addClass('error').after('<div class="error-tip">Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ</div>');
            var error = true;
        }
        if ($('#calculate_cost [name="email"]').val() == '' && $('#calculate_cost [name="phone"]').val() == '') {
            $('#calculate_cost [name="email"], #calculate_cost [name="phone"]').addClass('error').after('<div class="error-tip">СѓРєР°Р¶РёС‚Рµ РЅРѕРјРµСЂ С‚РµР»РµС„РѕРЅР° РёР»Рё e-mail</div>');
            var error = true;
        }

        if ( error ) {
            return false;
        }

        // Roistat begin
        var self = $(this);
        var self_serialize = self.serializeArray();
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
                /*$('#calculate_cost_form').html('<div class="success" style="color: #000;"><strong>РЎРїР°СЃРёР±Рѕ, С‡С‚Рѕ РІРѕСЃРїРѕР»СЊР·РѕРІР°Р»РёСЃСЊ С„РѕСЂРјРѕР№ СЂР°СЃС‡РµС‚Р° СЃС‚РѕРёРјРѕСЃС‚Рё РЅР° РЅР°С€РµРј СЃР°Р№С‚Рµ.</strong><br/>РќР°С€ РјРµРЅРµРґР¶РµСЂ СЃРІСЏР¶РµС‚СЃСЏ СЃ РІР°РјРё РІ Р±Р»РёР¶Р°Р№С€РµРµ РІСЂРµРјСЏ!</div>');*/
                
                // Roistat Begin
                var rsForm = 'Р Р°СЃСЃС‡РёС‚Р°С‚СЊ СЃС‚РѕРёРјРѕСЃС‚СЊ';
                var rsName = null;
                var rsPhone = null;
                var rsEmail = null;
                var rsSizeX = null;
                var rsSizeY = null;
                var rsSizeZ = null;
                var rsProductName = null;

                // - РџРѕР»СѓС‡РµРЅРёРµ С„РѕСЂРј
                $.each(self_serialize, function() {
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
                        case 'tovar':
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
                        case 'file':
                            rsImgURL = field.value;
                            break;
                    }
                });

                /*console.log(rsName);
                console.log(rsPhone);
                console.log(rsEmail);
                console.log(rsProductName);
                console.log(rsSizeX);
                console.log(rsSizeY);
                console.log(rsSizeZ);
                console.log(rsImgURL);*/
                //console.log('Р Р°Р·РјРµСЂ X: ' + rsSizeX + ', Р Р°Р·РјРµСЂ Y: ' + rsSizeY + ', Р’С‹СЃРѕС‚Р°: ' + rsSizeZ + ', РЎС…РµРјР°: ' + rsImgURL);

                var rsData = {
                    leadName: rsForm,
                    name: rsName,
                    phone: rsPhone,
                    email: rsEmail,
                    text: 'Р Р°Р·РјРµСЂ X: ' + rsSizeX + ', Р Р°Р·РјРµСЂ Y: ' + rsSizeY + ', Р’С‹СЃРѕС‚Р°: ' + rsSizeZ + ', РЎС…РµРјР°: ' + rsImgURL,
                    fields: {
                        643389: rsForm,
                        643391: rsProductName
                    }
                };
                //console.log(rsData);

                // - РћС‚РїСЂР°РІРєР°
                if (rsSizeX.length !== 0 && rsSizeY.length !== 0 && (rsPhone.length !== 0 || rsEmail.length !== 0)) {
                    roistatGoal.reach(rsData);
                }
                // Roistat End


                /* РїРѕРґРіРѕС‚РѕРІРєР° С„РѕСЂРјС‹ РґР»СЏ РїРѕРІС‚РѕСЂРЅРѕРіРѕ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ */
                var formCCF = $('form#calculate_cost');
                formCCF.find('input[type="text"]').val('');
                formCCF.find('input[type="text"]').removeClass('error');
                formCCF.find('input[type="file"]').val('');                
                formCCF.addClass('no_ccp');
                /* Р·Р°РЅРѕРІРѕ С†РµРЅС‚СЂСѓРµРј С„РѕСЂРјСѓ */
                $(".js_calculatecost-modal").css({
                    'left': ( $(window).width()-$(".js_calculatecost-modal").outerWidth() ) / 2 + 'px',
                });
                /* РѕС‚РѕР±СЂР°Р¶Р°РµРј Р·Р°РіР»СѓС€РєСѓ РѕР± СѓСЃРїРµС€РЅРѕР№ РѕС‚РїСЂР°РІРєРµ */
                $('#calculate_cost_report').html('<strong>РЎРїР°СЃРёР±Рѕ, С‡С‚Рѕ РІРѕСЃРїРѕР»СЊР·РѕРІР°Р»РёСЃСЊ С„РѕСЂРјРѕР№ СЂР°СЃС‡РµС‚Р° СЃС‚РѕРёРјРѕСЃС‚Рё РЅР° РЅР°С€РµРј СЃР°Р№С‚Рµ.</strong><br/><br/>РќР°С€ РјРµРЅРµРґР¶РµСЂ СЃРІСЏР¶РµС‚СЃСЏ СЃ Р’Р°РјРё РІ Р±Р»РёР¶Р°Р№С€РµРµ РІСЂРµРјСЏ!<br/><br/><span class="ccr-btn" id="calculate_cost_report-close">Р—Р°РєСЂС‹С‚СЊ С„РѕСЂРјСѓ</span>');
                $('#calculate_cost_report').show();
                $('#calculate_cost_report-close').click(function(){
                    $('.js_calculatecost-modal .js_close').click();
                });

                gtag('event', 'send', {'event_category': 'calcform'});

                return false;
            }
        });
    });

    /* end calc cost send */

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
    //$('input[name="fb_phone"], input#phone').mask('+7(~99)999-99-99');
    //$('input[name="of_phone"]').mask('+7(~99)999-99-99');
    //$('input[name="lf_phone"]').mask('+7(~99)999-99-99');
    //$('input#fphone').mask('+7(~99)999-99-99');
    //$('input#zphone').mask('+7(~99)999-99-99');
    //$('.calc-form-list input[name="phone"]').mask('+7(~99)999-99-99');

    $('input#fphone, input[name="of_phone"], input[name="lf_phone"], .calc-form-list input[name="phone"], input#zphone, input[name="fb_phone"], input#phone').attr('placeholder', '+7 (___) ___-__-__');
	$('input#fphone, input[name="of_phone"], input[name="lf_phone"], .calc-form-list input[name="phone"], input#zphone, input[name="fb_phone"], input#phone').on('change', function(){
		var input_value = $(this).val();
		input_value = input_value.replace(/[^0-9]/g, ""); // СѓР±РёСЂР°РµРј РІСЃС‘ РєСЂРѕРјРµ С†РёС„СЂ
		/* */
		if ( input_value.length == 11 ){
			/* РїСЂРѕРІРµСЂСЏРµРј РїРµСЂРІСѓСЋ С†РёС„СЂСѓ */
			if ( input_value.substring(0,1) == "7" || input_value.substring(0,1) == "8" ){
				input_value = "+7" + input_value.substring(1);
			}
		}else if (input_value.length == 10){
			input_value = "+7" + input_value;
		}else{
			input_value = "";
			//$(this).addClass('error').after('<div class="error-tip">РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РЅРѕРјРµСЂ С‚РµР»РµС„РѕРЅР° РІ С„РѕСЂРјР°С‚Рµ "+7 (999) 999-99-99"</div>');
			alert("РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РЅРѕРјРµСЂ С‚РµР»РµС„РѕРЅР° РІ С„РѕСЂРјР°С‚Рµ:\r\n \"+7 (999) 999-99-99\"");
		}

		/* РЈСЃС‚Р°РЅР°РІР»РёРІР°РµРј РЅРѕРІРѕРµ Р·РЅР°С‡РµРЅРёРµ */
		$(this).val(input_value);

		//$('input#fphone').val().length
	});

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

    $('.text').highlight('В«BellagioВ»', { className: 'bellagio-hightlight' });


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
    		$('#actionModal .modal-box').empty().append('<div style="text-align:center;"><p>РџРѕР·РґСЂР°РІР»СЏРµРј!</p><p>Р’С‹ РЅР°С€Р»Рё С‡Р°СЃС‚СЊ СЃРєРёРґРєРё))!</p><p>РџРѕРґСЂРѕР±РЅРµРµ РѕР± Р°РєС†РёРё <a href="/aktsiya-ot-kompanii-alru-radius-line.ru.html">С‚СѓС‚</a></p><p>РџСЂРѕРґРѕР»Р¶Р°Р№С‚Рµ РїРѕРёСЃРє!</p><p><a onclick="$(\'#actionModal\').fadeOut();" href="javascript:;">Р—Р°РєСЂС‹С‚СЊ</a></p></div>');
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

    // РґРѕР±Р°РІР»РµРЅРёРµ РєРѕРЅС‚Р°РєС‚Р° РІ Calltouch
    $('#fcallback, #zamerschik, #zamerschik_inline,  #calculate').submit(function() {
        console.log(0)
        var sub = '';
        if ($(this).attr('id') == 'fcallback') {
            sub = 'Р—Р°РєР°Р·Р°С‚СЊ РѕР±СЂР°С‚РЅС‹Р№ Р·РІРѕРЅРѕРє';
        } else if ($(this).attr('id') == 'zamerschik' || $(this).attr('id') == 'zamerschik_inline') {
            sub = 'Р’С‹Р·РІР°С‚СЊ Р·Р°РјРµСЂС‰РёРєР°';
        } else if ($(this).attr('id') == 'calculate') {
            sub = 'Р¤РѕСЂРјР° РљР°Р»СЊРєСѓР»СЏС‚РѕСЂ';
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
            //console.log('РЎРѕР±С‹С‚РёСЏ СЏРЅРґРµРєСЃР° С„РѕСЂРјР° Р·РІРѕРЅРєР°');
            yaCounter97690.reachGoal('zakazat_zvonok/');

            sub = 'Р—Р°РєР°Р·Р°С‚СЊ РѕР±СЂР°С‚РЅС‹Р№ Р·РІРѕРЅРѕРє (РЎС‚СЂР°РЅРёС†Р° Р¦РµРЅС‹)';
        } else if ($(this).attr('id') == 'feedback') {
            //console.log('РЎРѕР±С‹С‚РёСЏ СЏРЅРґРµРєСЃР° С„РѕСЂРјР° РїРёСЃСЊРјР°');
            yaCounter97690.reachGoal('spasibo_za_pismo/');

            sub = 'Р¤РѕСЂРјР° РќР°РїРёС€Рё РґРёСЂРµРєС‚РѕСЂСѓ';
        } else if ($(this).attr('id') == 'kuhni') {
            //console.log('РЎРѕР±С‹С‚РёСЏ СЏРЅРґРµРєСЃР° С„РѕСЂРјР° РїРёСЃСЊРјР°');
            yaCounter97690.reachGoal('spasibo_za_pismo/');

            sub = 'Р¤РѕСЂРјР° Р Р°СЃСЃС‡РёС‚Р°С‚СЊ Р±Р°Р·РѕРІСѓСЋ СЃС‚РѕРёРјРѕСЃС‚СЊ РєСѓС…РЅРё';
        }
        var fio = $(this).find('input[name="name"]').val();
        var phone = $(this).find('input[name="phone"]').val();
        var email = '';
        if ($(this).find('input[name="email"]').length > 0) {
            email = $(this).find('input[name="email"]').val();
        }
        send_to_calltouch(sub, fio, phone, email);

        /*console.log(fio.length);
        console.log(phone.length);
        console.log($(this).attr('id'));
        console.log($(this).find('textarea[name="message"]').val().length);*/

        try{
            if ( fio.length > 0 && phone.length > 0 && $(this).attr('id') == 'callback' ) {
                gtag('event', 'send', {'event_category': 'callback' });
                //console.log('send callback');
            }
            if ( fio.length > 0 && phone.length > 0 && $(this).find('textarea[name="message"]').val().length > 0 && $(this).attr('id') == 'feedback' ) {
                gtag('event', 'send', {'event_category': 'WriteLetter' });
                //console.log('send WriteLetter');
            }
        }catch(e){
            console.log(e);
        }

        // Roistat Begin
        var rsForm = null;
        var rsName = null;
        var rsPhone = null;
        var rsEmail = null;
        var rsMessage = null;

        switch (sub) {
            case 'Р—Р°РєР°Р·Р°С‚СЊ РѕР±СЂР°С‚РЅС‹Р№ Р·РІРѕРЅРѕРє (РЎС‚СЂР°РЅРёС†Р° Р¦РµРЅС‹)':
                rsForm = 'Р—Р°РєР°Р·Р°С‚СЊ РѕР±СЂР°С‚РЅС‹Р№ Р·РІРѕРЅРѕРє';
                break;
            case 'Р¤РѕСЂРјР° РќР°РїРёС€Рё РґРёСЂРµРєС‚РѕСЂСѓ':
                rsForm = 'Р—Р°РґР°С‚СЊ РІРѕРїСЂРѕСЃ';
                break;
            default:
                rsForm = sub;
                break;
        }

        // - РџРѕР»СѓС‡РµРЅРёРµ С„РѕСЂРј
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
            leadName: 'Р—Р°СЏРІРєР° СЃ "' + rsForm + '"',
            name: rsName,
            phone: rsPhone,
            email: rsEmail,
            text: rsMessage,
            fields: {
                643389: rsForm
            }
        };

        // - РћС‚РїСЂР°РІРєР°
        switch (rsForm) {
            case 'Р—Р°РґР°С‚СЊ РІРѕРїСЂРѕСЃ':
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
            case 'Р—Р°РєР°Р·Р°С‚СЊ РѕР±СЂР°С‚РЅС‹Р№ Р·РІРѕРЅРѕРє':
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
            var sub = 'Р¤РѕСЂРјР° РџРµСЂРµР·РІРѕРЅРёРј Р·Р° 24 СЃРµРєСѓРЅРґС‹';
            var phone = $(this).prev().prev().val();
            send_to_calltouch(sub, '', phone, '');
        });
        $('#cbkPhoneInput').keyup(function(e) {
            // enter
            if (e.keyCode == 13) {
                var sub = 'Р¤РѕСЂРјР° РџРµСЂРµР·РІРѕРЅРёРј Р·Р° 24 СЃРµРєСѓРЅРґС‹';
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
            sessionId: window.call_value
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
			<p>РџРѕР·РґСЂР°РІР»СЏРµРј! Р’С‹ СЃРѕР±СЂР°Р»Рё СЃРІРѕСЋ СЃРєРёРґРєСѓ, Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»СЏ РЅРёР¶Рµ Рё Р’Р°Рј РЅР° РїРѕС‡С‚Сѓ СЃСЂР°Р·Сѓ РїСЂРёРґРµС‚ РєРѕРґ СЃРєРёРґРєРё.</p>\
			<p><label>Р’Р°С€Рµ РёРјСЏ*</label><br/><input type="text" name="name"/></p>\
			<p><label>Email*</label><br/><input type="text" name="email"/></p>\
			<p><label>РљРѕРЅС‚Р°РєС‚РЅС‹Р№ С‚РµР»РµС„РѕРЅ</label><br/><input type="text" name="phone"/></p>\
			<p><label>РћС‚РєСѓРґР° Рѕ РЅР°СЃ СѓР·РЅР°Р»Рё*</label><br/><input type="checkbox" name="where[]" value="Google"/> Google<br/><input type="checkbox" name="where[]" value="Yandex"/> Yandex<br/><input type="checkbox" name="where[]" value="РЎРѕРІРµС‚С‹ РґСЂСѓР·РµР№"/> РЎРѕРІРµС‚С‹ РґСЂСѓР·РµР№<br/><input type="checkbox" name="where[]" value="Р–СѓСЂРЅР°Р»С‹"/> Р–СѓСЂРЅР°Р»С‹<br/><input type="checkbox" name="where[]" value="РўРѕСЂРіРѕРІС‹Рµ С†РµРЅС‚СЂС‹"/> РўРѕСЂРіРѕРІС‹Рµ С†РµРЅС‚СЂС‹<br/><input type="checkbox" name="where[]" value="Р”СЂСѓРіРѕРµ"/> Р”СЂСѓРіРѕРµ<br/></p>\
			<p>*РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ РґР»СЏ Р·Р°РїРѕР»РЅРµРЅРёСЏ</p>\
			<p><a onclick="$(\'#actionModal\').fadeOut();" href="javascript:;">Р—Р°РєСЂС‹С‚СЊ</a> <a href="javascript:;" onclick="actionSubmit($(\'#actionForm\').serialize());">РћС‚РїСЂР°РІРёС‚СЊ</a></p>\
		</form>\
		<div class="ajax-results"></div>\
	');
}

function questionForm() {
    return ('\
		<form method="post" id="questionForm">\
			<input type="hidden" name="action" value="questionSubmit"/>\
			<p><label>Р’Р°С€Рµ РёРјСЏ*</label><br/><input type="text" name="name"/></p>\
			<p><label>Email*</label><br/><input type="text" name="email"/></p>\
			<p><label>РљРѕРЅС‚Р°РєС‚РЅС‹Р№ С‚РµР»РµС„РѕРЅ</label><br/><input type="text" name="phone"/></p>\
			<p><label>Р’Р°С€ РІРѕРїСЂРѕСЃ*</label><br/><textarea style="width: calc(100% - 6px);" name="question"></textarea></p>\
			<p>*РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ РґР»СЏ Р·Р°РїРѕР»РЅРµРЅРёСЏ</p>\
			<p><a onclick="$(\'#actionModal\').fadeOut();" href="javascript:;">Р—Р°РєСЂС‹С‚СЊ</a> <a href="javascript:;" onclick="actionSubmit($(\'#questionForm\').serialize());">РћС‚РїСЂР°РІРёС‚СЊ</a></p>\
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
        alert('РќРµРІРѕР·РјРѕР¶РЅРѕ СЃРѕР·РґР°С‚СЊ Р·Р°РєР»Р°РґРєСѓ!\n' + 'РќР°Р¶РјРёС‚Рµ Ctrl-D С‡С‚РѕР±С‹ РґРѕР±Р°РІРёС‚СЊ СЃС‚СЂР°РЅРёС†Сѓ РІ Р·Р°РєР»Р°РґРєРё');
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

    var a = $(".js_dialog_order, .js_dialog_letter"),
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
        document.getElementById('of_file_name').innerHTML = 'Р’С‹Р±СЂР°РЅ С„Р°Р№Р»: ' + file;
    } else {
        document.getElementById('of_file_wrap').className = "";
        document.getElementById('of_file_name').innerHTML = 'Р’С‹Р±РµСЂРёС‚Рµ С„Р°Р№Р»';
    }

    if (formName == 'feedback') {

        var fileFeedBack = document.getElementById('feedback-file-input').value;
        fileFeedBack = fileFeedBack.replace(/\\/g, '/').split('/').pop();

        if (fileFeedBack != '') {
            document.getElementById('feedback_file_name').innerHTML = 'Р’С‹Р±СЂР°РЅ С„Р°Р№Р»: ' + fileFeedBack;
        } else {
            document.getElementById('feedback_file_name').innerHTML = 'Р’С‹Р±РµСЂРёС‚Рµ С„Р°Р№Р»';
        }
    }

}*/

function getFileName(number) {
	var form_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	if ( form_id != "" ) {
		var fileWrap = document.querySelectorAll('#'+ form_id + ' #file_' + number)[0];
	}else{
		var fileWrap = document.getElementById('file_' + number);
	}
    var fileElem = fileWrap.getElementsByClassName('of_file');
    var file = fileElem[0].value;
    file = file.replace(/\\/g, '/').split('/').pop();
    if (file != '') {
        fileWrap.className = "of_file_wrap file_select";
        fileWrap.getElementsByClassName('of_file_name')[0].innerHTML = 'Р’С‹Р±СЂР°РЅ С„Р°Р№Р»: ' + file;
    } else {
        fileWrap.className = "of_file_wrap";
        fileWrap.getElementsByClassName('of_file_name')[0].innerHTML = 'Р’С‹Р±РµСЂРёС‚Рµ С„Р°Р№Р»';
    }
}

function getFeedbackFileName() {
    var fileFeedBack = document.getElementById('feedback-file-input').value;
    fileFeedBack = fileFeedBack.replace(/\\/g, '/').split('/').pop();

    if (fileFeedBack != '') {
        document.getElementById('feedback_file_name').innerHTML = 'Р’С‹Р±СЂР°РЅ С„Р°Р№Р»: ' + fileFeedBack;
    } else {
        document.getElementById('feedback_file_name').innerHTML = 'Р’С‹Р±РµСЂРёС‚Рµ С„Р°Р№Р»';
    }
}

$(document).ready(function() {
    modalWindow();
    console.log(window.location.pathname);
    if (window.location.href.indexOf('#f') > -1 || window.location.href.indexOf('#point') > -1) {
        $('.block-calc2-form').slideDown();
    }

    if (window.location.pathname != '/kontaktyi.html') {
        // $("a:contains(РїРѕРґСЂРѕР±РЅРµРµ)").addClass('showmore').wrap('<div class="catalog-item-btns">');
        // $('table.case_hover_ux .showmore').before('<a class="catalog-item-calc-btn">Р Р°СЃСЃС‡РёС‚Р°С‚СЊ СЃС‚РѕРёРјРѕСЃС‚СЊ</a>');

        // $('table.case_hover_ux td > div > a.highslide + .catalog-list-title').each(function() {
        //     console.log($(this).text());
        // });

    }




    $(".js_call-me").click(function(a) {
        $(".js_call-modal").fadeIn(), $(".dialog-overlay").fadeIn(), a.preventDefault()
    });
    //$(".js_order-me, .popular-goods-calc-price, .catalog-item-calc-btn").click(function(a) {
    $(".js_order-me").click(function(a) {
        a.stopImmediatePropagation();
        $(".js_order-modal").fadeIn(), $(".dialog-overlay").fadeIn(), a.preventDefault()
    });
    $(".js_letter-me").click(function(a) {
        a.stopImmediatePropagation();
        $(".js_letter-modal").fadeIn(), $(".dialog-overlay").fadeIn(), a.preventDefault()
    });
    $(".catalog-item-calc-btn, .popular-goods-calc-price").click(function(a) {
        a.stopImmediatePropagation();
        /**/
        var productBlock    = $(this).parents('.catalog-item-wrap');
        var formCCF         = $('form#calculate_cost');
        var formCCP         = $('#calculate_cost_form');
        var fullname        = productBlock.find('.fullname').val();
        var imgschema       = productBlock.find('.imgschema').val();
        /**/
        formCCP.find('.ccp_name').html(fullname);
        formCCP.find('.ccp_schema').attr('src', imgschema);
        /* РїСЂРѕРІРµСЂРєР° РЅР° РЅР°Р»РёС‡РёРµ СЃС…РµРјС‹ (РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ СЃРїСЂР°РІР° РѕС‚ С„РѕСЂРјС‹) */
        if ( fullname && imgschema ){
            formCCF.find('.calc-form-list input[name="tovar"]').val(fullname);
            formCCF.find('.ccf_tovar').html('');
            formCCF.find('.calc-form-list input[name="file"]').val('https://www.radius-line.ru/'+imgschema);
            formCCF.removeClass('no_ccp');
        }else if ( fullname ){
            formCCF.find('.calc-form-list input[name="tovar"]').val(fullname);
            formCCF.find('.ccf_tovar').html(fullname);
            formCCF.find('input[name="file"]').val('https://www.radius-line.ru/images/no_image.png');
            formCCF.addClass('no_ccp');
        }else{
            formCCF.find('input[name="tovar"]').val('РќСѓР¶РЅРѕ СѓС‚РѕС‡РЅРёС‚СЊ');
            formCCF.find('.ccf_tovar').html('');
            formCCF.find('input[name="file"]').val('https://www.radius-line.ru/images/no_image.png');
            formCCF.addClass('no_ccp');
        }
        /* С†РµРЅС‚СЂРѕРІРєР° С„РѕСЂРјС‹ */
        $(".js_calculatecost-modal").css({
            'left': ( $(window).width()-$(".js_calculatecost-modal").outerWidth() ) / 2 + 'px',
        });
        /* СѓР±РёСЂР°РµРј Р·Р°РіР»СѓС€РєСѓ РµСЃР»Рё РѕРЅР° РµСЃС‚СЊ */
        $('#calculate_cost_report').hide();
        /* РїРѕРєР°Р· С„РѕСЂРјС‹ */
        $(".js_calculatecost-modal").fadeIn(), $(".dialog-overlay").fadeIn(), a.preventDefault()
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
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ "Р Р°Р·РјРµСЂ X"');
            return false;
        }

        if ($('#calculate [name="size_y"]').val() == '') {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ "Р Р°Р·РјРµСЂ Y"');
            return false;
        }

        if ($('#calculate [name="name"]').val() == '') {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ "Р’Р°С€Рµ РёРјСЏ"');
            return false;
        }

        if ($('#calculate [name="email"]').val() == '' && $('#calculate [name="phone"]').val() == '') {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РѕРґРЅРѕ РёР· РїРѕР»РµР№ "РўРµР»РµС„РѕРЅ" РёР»Рё "E-mail"');
            return false;
        }

        return true;
    });

    $('#credit_calculate [type="submit"]').click(function() {
        if ($('#credit_calculate [name="size_x"]').val() == '') {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ "Р Р°Р·РјРµСЂ X"');
            return false;
        }

        if ($('#credit_calculate [name="size_y"]').val() == '') {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ "Р Р°Р·РјРµСЂ Y"');
            return false;
        }

        if ($('#credit_calculate [name="name"]').val() == '') {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ "Р’Р°С€Рµ РёРјСЏ"');
            return false;
        }

        if ($('#credit_calculate [name="email"]').val() == '' && $('#credit_calculate [name="phone"]').val() == '') {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РѕРґРЅРѕ РёР· РїРѕР»РµР№ "РўРµР»РµС„РѕРЅ" РёР»Рё "E-mail"');
            return false;
        }

        return true;
    });

    $('#bottom_form [type="submit"]').click(function() {
        if ($('#bottom_form [name="fb_name"]').val() == '' && $('#bottom_form [name="fb_phone"]').val() == '') {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»СЏ "Р’Р°С€Рµ РёРјСЏ" Рё "РўРµР»РµС„РѕРЅ"');
            return false;
        }
        if ($('#bottom_form [name="fb_name"]').val() == '') {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ "Р’Р°С€Рµ РёРјСЏ"');
            return false;
        }
        if ($('#bottom_form [name="fb_phone"]').val() == '') {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ "РўРµР»РµС„РѕРЅ"');
            return false;
        }

        return true;
    });

    $('#question [type="submit"]').click(function() {
        if ($('#question [name="message"]').val() == '') {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ "Р’Р°С€ РІРѕРїСЂРѕСЃ"');
            return false;
        }
        if ($('#question [name="name"]').val() == '') {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ "Р’Р°С€Рµ РёРјСЏ"');
            return false;
        }
        if ($('#question [name="phone"]').val() == '' && $('#question [name="email"]').val() == '') {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РѕРґРЅРѕ РёР· РїРѕР»РµР№ "РўРµР»РµС„РѕРЅ" РёР»Рё "E-mail"');
            return false;
        }
    });

    $('#credit_question [type="submit"]').click(function() {
        if ($('#credit_question [name="message"]').val() == '') {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ "Р’Р°С€ РІРѕРїСЂРѕСЃ"');
            return false;
        }
        if ($('#credit_question [name="name"]').val() == '') {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ "Р’Р°С€Рµ РёРјСЏ"');
            return false;
        }
        if ($('#credit_question [name="phone"]').val() == '' && $('#credit_question [name="email"]').val() == '') {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РїРѕР»РЅРёС‚Рµ РѕРґРЅРѕ РёР· РїРѕР»РµР№ "РўРµР»РµС„РѕРЅ" РёР»Рё "E-mail"');
            return false;
        }
    });

    $('#fcallback [type="submit"]').click(function() {

        if ($('#fcallback [name="name"]').val() == '') {
            $('#fcallback [name="name"]').addClass('error').after('<div class="error-tip">Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ</div>');
            return false;
        }
        if ($('#fcallback [name="phone"]').val() == '') {
            $('#fcallback [name="phone"]').addClass('error').after('<div class="error-tip">Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ</div>');
            return false;
        }
    });

    $('#orderform [type="submit"]').click(function() {

        if ($('#orderform [name="of_name"]').val() == '') {
            $('#orderform [name="of_name"]').addClass('error').after('<div class="error-tip">Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ</div>');
            return false;
        }

        if ($('#orderform [name="of_email"]').val() == '') {
            $('#orderform [name="of_email"]').addClass('error').after('<div class="error-tip">Р·Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ</div>');
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

    // РЎРєСЂС‹РІР°РµРј СЃРЅРѕСЃРєСѓ, РµСЃР»Рё РЅРµС‚ "*" РІ С†РµРЅРµ С‚РѕРІР°СЂР°
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
