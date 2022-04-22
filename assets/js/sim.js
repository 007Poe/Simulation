var base1 = [
  357, 446, 534, 446,
  536, 668, 802, 668,
  936, 1167, 1401, 1167,
  1283, 1598, 1918, 1598
];
var rehab1 = [ 334, 608, 903 ];
var opt1 = [ 334, 601, 556, 278, 668, 2224, 342, 20000 ];

var base2 = [
  714, 892, 1071, 892,
  1072, 1340, 1608, 1340,
  1872, 2340, 2808, 2340,
  2565, 3206, 3847, 3206
];
var rehab2 = [ 668, 1336, 1806 ];
var opt2 = [ 684, 1309, 1140, 570, 1368, 4506, 684, 20000 ];

var base3 = [
  1072, 1338, 1606, 1338,
  1608, 2010, 2412, 2010,
  2808, 3510, 4212, 3510,
  3848, 4810, 5772, 4810
];
var rehab3 = [ 1002, 2004, 2709 ];
var opt3 = [ 1026, 1963, 1710, 885, 2052, 6840, 1026, 20000 ];

// var time = ["通常の時間","夜間(18時～22時)25%増し","深夜(22時～6時)50%増し","早朝(6時～8時)25%増し"];

function realtimeCalc1() {
  var chkNum = $(this).val();
  if ( /^0\d+/.test( chkNum ) ) {
    var fixNum = Number( chkNum );
    $(this).val( fixNum );
    if ( /^[0-9]{3,}/.test( chkNum ) ) { 
      $(this).val( 0 );
    }
  }
  else if ( !/^[1-9](\d?)+/.test( chkNum ) ) { 
    $(this).val( 0 );
  }
  else if ( /^[0-9]{3,}/.test( chkNum ) ) { 
    $(this).val( 0 );
  }

  var subTotal = 0; 
  var num = 0;
  $.each( base1, function(i) {
    num = $(".simulation.-sim1 #p1_num" + i).val();
    time = $("#p1time-" + i).val();
    longtime = $("#p1longtime-" + i).val();
    price = this * num;
    addprice = String(price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    subTotal += price; 
    if(num != 0){
      $('#time').append('<tr><td><span class="result-text">' + time + '</span></td></tr>');
      $('#longtime').append('<tr><td><span class="result-text">' + longtime + '</td></tr>');
      $('#num').append('<tr><td><span class="result-text">' + num + '</td></tr>');
      $('#fee').append('<tr><td><span class="result-text">' + addprice + '</td></tr>');
    }
  });

  var rehabTotal = 0; 
  var rehabnum = 0;
  $.each( rehab1, function(i) { 
    rehabnum = $(".simulation.-sim1 #p1_rehab" + i).val();
    time = $("#p1time-rehab" + i).val();
    longtime = $("#p1longtime-rehab" + i).val();
    rehabprice = this * rehabnum;
    rehabaddprice = String(rehabprice).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    rehabTotal += rehabprice;
    if(rehabnum != 0){
      $('#time').append('<tr><td><span class="result-text">' + time + '</span></td></tr>');
      $('#longtime').append('<tr><td><span class="result-text">' + longtime + '</td></tr>');
      $('#num').append('<tr><td><span class="result-text">' + rehabnum + '</td></tr>');
      $('#fee').append('<tr><td><span class="result-text">' + rehabaddprice + '</td></tr>');
    }
  });

  var optTotal = 0; 
  $.each( opt1, function(i) {
    if ( $('.simulation.-sim1 #p1_opt' + i).is(':checked') ) {
      optTotal += this;
      optVal = this;
      optValstr = String(optVal).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      optTime = $("#p1-optval" + i).val();
      $('#time').append('<tr><td><span class="result-text">' + optTime + '</span></td></tr>');
      $('#fee').append('<tr><td><span class="result-text">' + optValstr + '</td></tr>');
    }
  });

  total = subTotal + rehabTotal + optTotal;
  total = String(total).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  $(".simulation.-sim1 #total").html( total );
}

function realtimeCalc2() {
  var chkNum = $(this).val();
  if ( /^0\d+/.test( chkNum ) ) {
    var fixNum = Number( chkNum );
    $(this).val( fixNum );
    if ( /^[0-9]{3,}/.test( chkNum ) ) { 
      $(this).val( 0 );
    }
  }
  else if ( !/^[1-9](\d?)+/.test( chkNum ) ) { 
    $(this).val( 0 );
  }
  else if ( /^[0-9]{3,}/.test( chkNum ) ) { 
    $(this).val( 0 );
  }

  var subTotal = 0; 
  var num = 0;
  $.each( base2, function(i) {
    num = $(".simulation.-sim2 #p2_num" + i).val();
    time = $("#p2time-" + i).val();
    longtime = $("#p2longtime-" + i).val();
    price = this * num;
    addprice = String(price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    subTotal += price; 
    if(num != 0){
      $('#time2').append('<tr><td><span class="result-text">' + time + '</span></td></tr>');
      $('#longtime2').append('<tr><td><span class="result-text">' + longtime + '</td></tr>');
      $('#num2').append('<tr><td><span class="result-text">' + num + '</td></tr>');
      $('#fee2').append('<tr><td><span class="result-text">' + addprice + '</td></tr>');
    }
  });

  var rehabTotal = 0; 
  var rehabnum = 0;
  $.each( rehab2, function(i) { 
    rehabnum = $(".simulation.-sim2 #p2_rehab" + i).val();
    time = $("#p2time-rehab" + i).val();
    longtime = $("#p2longtime-rehab" + i).val();
    rehabprice = this * rehabnum;
    rehabaddprice = String(rehabprice).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    rehabTotal += rehabprice;
    if(rehabnum != 0){
      $('#time2').append('<tr><td><span class="result-text">' + time + '</span></td></tr>');
      $('#longtime2').append('<tr><td><span class="result-text">' + longtime + '</td></tr>');
      $('#num2').append('<tr><td><span class="result-text">' + rehabnum + '</td></tr>');
      $('#fee2').append('<tr><td><span class="result-text">' + rehabaddprice + '</td></tr>');
    }
  });

  var optTotal = 0; 
  $.each( opt2, function(i) {
    if ( $('.simulation.-sim2 #p2_opt' + i).is(':checked') ) {
      optTotal += this;
      optVal = this;
      optValstr = String(optVal).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      optTime = $("#p2-optval" + i).val();
      $('#time2').append('<tr><td><span class="result-text">' + optTime + '</span></td></tr>');
      $('#fee2').append('<tr><td><span class="result-text">' + optValstr + '</td></tr>');
    }
  });

  total = subTotal + rehabTotal + optTotal;
  total = String(total).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  $(".simulation.-sim2 #total").html( total );
}

function realtimeCalc3() {
  var chkNum = $(this).val();
  if ( /^0\d+/.test( chkNum ) ) {
    var fixNum = Number( chkNum );
    $(this).val( fixNum );
    if ( /^[0-9]{3,}/.test( chkNum ) ) { 
      $(this).val( 0 );
    }
  }
  else if ( !/^[1-9](\d?)+/.test( chkNum ) ) { 
    $(this).val( 0 );
  }
  else if ( /^[0-9]{3,}/.test( chkNum ) ) { 
    $(this).val( 0 );
  }

  var subTotal = 0; 
  var num = 0;
  $.each( base3, function(i) {
    num = $(".simulation.-sim3 #p3_num" + i).val();
    time = $("#p3time-" + i).val();
    longtime = $("#p3longtime-" + i).val();
    price = this * num;
    addprice = String(price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    subTotal += price; 
    if(num != 0){
      $('#time3').append('<tr><td><span class="result-text">' + time + '</span></td></tr>');
      $('#longtime3').append('<tr><td><span class="result-text">' + longtime + '</td></tr>');
      $('#num3').append('<tr><td><span class="result-text">' + num + '</td></tr>');
      $('#fee3').append('<tr><td><span class="result-text">' + addprice + '</td></tr>');
    }
  });

  var rehabTotal = 0; 
  var rehabnum = 0;
  $.each( rehab3, function(i) { 
    rehabnum = $(".simulation.-sim3 #p3_rehab" + i).val();
    time = $("#p3time-rehab" + i).val();
    longtime = $("#p3longtime-rehab" + i).val();
    rehabprice = this * rehabnum;
    rehabaddprice = String(rehabprice).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    rehabTotal += rehabprice;
    if(rehabnum != 0){
      $('#time3').append('<tr><td><span class="result-text">' + time + '</span></td></tr>');
      $('#longtime3').append('<tr><td><span class="result-text">' + longtime + '</td></tr>');
      $('#num3').append('<tr><td><span class="result-text">' + rehabnum + '</td></tr>');
      $('#fee3').append('<tr><td><span class="result-text">' + rehabaddprice + '</td></tr>');
    }
  });

  var optTotal = 0; 
  $.each( opt3, function(i) {
    if ( $('.simulation.-sim3 #p3_opt' + i).is(':checked') ) {
      optTotal += this;
      optVal = this;
      optValstr = String(optVal).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      optTime = $("#p3-optval" + i).val();
      $('#time3').append('<tr><td><span class="result-text">' + optTime + '</span></td></tr>');
      $('#fee3').append('<tr><td><span class="result-text">' + optValstr + '</td></tr>');
    }
  });

  total = subTotal + rehabTotal + optTotal;
  total = String(total).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  $(".simulation.-sim3 #total").html( total );
}

$(function() {
    $('#btn-sim1').click(function() {
      $('#btn-sim1').css("background","#0d6d66");
      $('#btn-sim2, #btn-sim3').css("background","");
      $('#simpars2, #simpars3').trigger("reset");
    });
  
    $('#btn-sim2').click(function() {
      $('#btn-sim2').css("background","#146f97");
      $('#btn-sim1, #btn-sim3').css("background","");
      $('#simpars1, #simpars3').trigger("reset");
    });

    $('#btn-sim3').click(function() {
      $('#btn-sim3').css("background","#3471c7");
      $('#btn-sim1, #btn-sim2').css("background","");
      $('#simpars1, #simpars2').trigger("reset");
    });

    $('#modal-close, #calModal1, #calModal2, #calModal3, #modal-close').on('click',function(){
      $('#time').last().children().remove();
      $('#longtime').last().children().remove();
      $('#num').last().children().remove();
      $('#fee').last().children().remove();
      $('#time2').last().children().remove();
      $('#longtime2').last().children().remove();
      $('#num2').last().children().remove();
      $('#fee2').last().children().remove();
      $('#time3').last().children().remove();
      $('#longtime3').last().children().remove();
      $('#num3').last().children().remove();
      $('#fee3').last().children().remove();
    })
    

  });

  $(document).ready( function(){
    $('.sim1-cal').on("click", realtimeCalc1);
    $('.sim2-cal').on("click", realtimeCalc2);
    $('.sim3-cal').on("click", realtimeCalc3);
    // $('.simulation.-sim2 input').on("change click blur", realtimeCalc2);
  });
  