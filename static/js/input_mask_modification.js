function input_phone_mask(){$('input[name*="phone"]').mask("+0 000 000-00-00",{onKeyPress:function(val,event,field,options){if(val[1]=='8'||val[1]=='7'){event.currentTarget.value='+7'+val.slice(2)}else if(/[12345690]/.test(val[1])){event.currentTarget.value='+7'+val.slice(1)}}})}input_phone_mask();$(document).on('show.bs.modal show',function(){input_phone_mask()});