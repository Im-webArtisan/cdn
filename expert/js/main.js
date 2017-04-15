$(document).ready(function () {
    console.log('JQuery Loaded...');

    //hidden divs
    $('#search').hide();
    $('#usbData').hide();
    $('#keyboardData').hide();
    $('#networkData').hide();

    //hide table
    $('#sol').hide();
    $('#sol1').hide();
    $('#sol2').hide();
    $('#sol3').hide();
    $('#sol4').hide();
    $('#sol5').hide();
    $('#sol6').hide();
    $('#sol7').hide();
    $('#sol8').hide();
    $('#sol9').hide();
    $('#sol10').hide();

    //desktop
    $('#desktop').on('click', function(e) {
        e.preventDefault();
        console.log('Desktop');
//            $('#form').hide();
        $( "#form" ).toggle( "explode" );
        $('#search').show();

//            $('#search').append('<input type="text" class="form-control" id="search" placeholder="Search Query....">');
    });

    //laptop
    $('#laptop').on('click', function (e) {
        e.preventDefault();
        console.log('Laptop');
    });

    //usb clicked
    $('#usb').on('click', function (e) {
        e.preventDefault();
        console.log('USB');
        $('#search').toggle('explode');
        $('#usbData').show();
    });

    //keyboard clicked
    $('#keyboard').on('click', function (e) {
        e.preventDefault();
        $('#search').toggle('scale');
        $('#keyboardData').show();
    });

    //network clicked
    $('#network').on('click', function (e) {
        e.preventDefault();
        $('#search').toggle('scale');
        $('#networkData').show();
    });

    //solving network issues
    var net1, net2, net3, net4, net5;
    net1 = $('#network-1');
    net2 = $('#network-2');
    net3 = $('#network-3');
    net4 = $('#network-4');
    net5 = $('#network-5');

    $(net1).on('click', function () {
        if ($(this).is(':checked')){
            $('#networkData').hide();
            $('#sol1').show();
            $('#sol2').show();
        }
    });
    $(net2).on('click', function () {
        if ($(this).is(':checked')){
            $('#networkData').hide();
            $('#sol3').show();
            $('#sol4').show();
        }
    });
    $(net3).on('click', function () {
        if ($(this).is(':checked')){
            $('#networkData').hide();
            $('#sol5').show();
            $('#sol6').show();
        }
    });
    $(net4).on('click', function () {
        if ($(this).is(':checked')){
            $('#networkData').hide();
            $('#sol7').show();
            $('#sol8').show();
        }
    });
    $(net5).on('click', function () {
        if ($(this).is(':checked')){
            $('#networkData').hide();
            $('#sol9').show();
            $('#sol10').show();
        }
    });


});