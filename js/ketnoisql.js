var khoa = 1;
var id_goix = 0;
var kq_output = 0;
var cap_nhat = 0;
var name,email,subject_f,message_f;

function handleSendData(){
   
    event.preventDefault();
    const form = document.forms.formGetinfor;
   

    if(form)
    {
     if (cap_nhat == 0) {
	document.getElementById("button_sub").innerHTML = "Đang gửi dữ liệu về Server";
     name = form.elements.name.value;
     email = form.elements.email.value;
     subject_f = form.elements.subject.value;
     message_f = form.elements.message.value;
	 var luu_local = name + ", " + email + ", " + subject_f + ", " +  message_f;
	 localStorage.setItem("thongtin", luu_local);
    
	
     khoa = 0;
     id_goix = 1;
     kq_output = 0;
	 cap_nhat = 2;
	 
    }
    
    }     
    }