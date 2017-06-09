$(function(){
	$('#txtP_Moisture').blur(function(){
		if($.trim($('#txtP_Moisture').val()) != ''){
			if(parseFloat($('#txtP_Moisture').val()) >= 14){
				$('#txtP_D').val(parseFloat($('#txtP_Moisture').val()) - 14);	
			} else {
				$('#txtP_D').val('0');
			}
		}
		if($.trim($('#txtO_Moisture').val()) != ''){
			if(parseFloat($('#txtO_Moisture').val()) >= 14){
				$('#txtO_D').val(parseFloat($('#txtO_Moisture').val()) - 14);	
			} else {
				$('#txtO_D').val('0');
			}	
		}
		if($.trim($('#txtP_C').val()) != '' && $.trim($('#txtP_D').val()) != ''){
			p_c = parseFloat($.trim($('#txtP_C').val()));
			p_d = parseFloat($.trim($('#txtP_D').val()));
			p_result = (p_c-(p_c*p_d)/100);
			$('#txtP_E').val(p_result.toFixed(0));
		}
		if($.trim($('#txtO_C').val()) != '' && $.trim($('#txtO_D').val()) != ''){
			o_c = parseFloat($.trim($('#txtO_C').val()));
			o_d = parseFloat($.trim($('#txtO_D').val()));
			o_result = (o_c-(o_c*o_d)/100);
			$('#txtO_E').val(o_result.toFixed(0));
		}
		if($.trim($('#txtP_A').val())!= '' && $.trim($('#txtP_B').val())!='' && $.trim($('#txtP_E').val())!=''){
			p_e = parseFloat($.trim($('#txtP_E').val()));
			p_result = (p_e/(60))
			$('#txtP_F').val(p_result.toFixed(2));
		}
		if($.trim($('#txtO_A').val())!= '' && $.trim($('#txtO_B').val())!='' && $.trim($('#txtO_E').val())!=''){
			o_e = parseFloat($.trim($('#txtO_E').val()));
			o_result = (o_e/(60))
			$('#txtO_F').val(o_result.toFixed(2));
		}
		if($.trim($('#txtP_F').val())!=''){
			p_f = parseFloat($.trim($('#txtP_F').val()));
			p_result = p_f * 4046;
			$('#txtP_G').val(p_result.toFixed(2));
		}
		if($.trim($('#txtO_F').val())!=''){
			o_f = parseFloat($.trim($('#txtO_F').val()));
			o_result = o_f * 4046;
			$('#txtO_G').val(o_result.toFixed(2));	
		}
		if($.trim($('#txtP_G').val()) != '' && $.trim($('#txtO_G').val()) != ''){
			p = parseFloat($.trim($('#txtP_G').val()));
			o = parseFloat($.trim($('#txtO_G').val()));
			diff_ = p - o; 
			$('#total_difference').html(diff_.toFixed(2));
		}
	});

	$('#txtO_Moisture').blur(function(){
		$('#txtP_Moisture').blur();
	});
	$('#txtP_A').blur(function(){
		$('#txtP_Moisture').blur();
	});
	$('#txtO_A').blur(function(){
		$('#txtP_Moisture').blur();
	});
	$('#txtP_B').blur(function(){
		$('#txtP_Moisture').blur();
	});
	$('#txtO_B').blur(function(){
		$('#txtP_Moisture').blur();
	});
	$('#txtP_C').blur(function(){
		$('#txtP_Moisture').blur();
	});
	$('#txtO_C').blur(function(){
		$('#txtP_Moisture').blur();
	});
});