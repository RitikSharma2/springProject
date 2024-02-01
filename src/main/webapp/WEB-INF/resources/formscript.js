
$("form[name='form2']").submit(function(e){

    e.preventDefault();
    console.log("submit");

    console.log("inside ajax call");
    var name=$("input[name='fname']").val();
    var age=$("input[name='fage']").val();
    var gender=$("input[name='fgender']").val();
    var email=$("input[name='femail']").val();
    var dob=$("input[name='fdob']").val();
    var phone=$("input[name='fphone']").val();
    var password=$("input[name='fpass']").val();
    
    
    var id=phone+name;
    console.log("user id = "+id);
    console.log("let do it");
    console.log("user password = "+password);
  
	
	$.ajax({
          
	    'type': 'POST',
	    'url': 'saveuser',
	    'async': 'false',
        'data': JSON.stringify({
	        id: id,
            name: name, 
            age : age, 
            gender : gender, 
            email : email, 
            dob : dob, 
            phone : phone,
            password:password, 
            
        }),
        headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
        success: function (data) {
	
               
               
                if(data.status=='OK')
                {
	                console.log("1st Inside POST Method success data successfully transmitted");
                }
                else
                {
	                console.log('1st Inside POST Method Failed adding person: ' + data.status + ', ' + data.errorMessage);
	
                }  
            }
            
        }).done(function(arr){
	
	            if(arr.status=='OK')
                {
	                console.log("2nd Inside POST Method success data successfully transmitted");
                }
                else
                {
	                console.log('2nd Inside POST Method FAILED adding person: ' + arr.status + ', ' + arr.errorMessage);
	
                } 
          
                var dataSet=[
       
                            ]; 
           
             var btn='<button class="del-button" type="button">Delete</button>  <button class="edit-button" type="button">Edit</button>';
	        
	      
		     for (let i = 0; i < arr.length; i++) {
			     let name= arr[i]["name"];
			     let age=arr[i]["age"];
			     let gender=arr[i]["gender"];
			     let email=arr[i]["email"];
			     let dob=arr[i]["dob"];
			     let phone=arr[i]["phone"];
			     
			     const localArray=[name,age,gender,email,dob,phone,btn];
			     console.log("localArray = "+localArray);
			     dataSet.push(localArray); 
			 }
		
                 
                 
                  $('#example').DataTable({
		           
                      data: dataSet,
                      columns: [
                        { title: 'Name' },
                        { title: 'Age' },
                        { title: 'Gender' },
                        { title: 'Email.' },
                        { title: 'DOB' },
                        { title: 'Phone' },
                        { title: 'action' }
                        
                    ],
                     "bDestroy": true
                  });
		      
		   });       
                 
 });
 




$('body').on('click','.del-button',function(){
	
	 var name=$(this).parents('tr').find("td:eq(0)").text();  // fetch value of column
     console.log("name = "+name);
     
     var phone=$(this).parents('tr').find("td:eq(5)").text();  // fetch value of column
     console.log("age = "+phone);
    
     userId=phone+name;
	
	
	
		    $.ajax({
		          
			    'type': 'DELETE',
			    'url': `deleteuser/${userId}`,
			    'async': 'false',
		         success: function (data) {
			
		               
		                console.log("Inside PUT Method success");
		                console.log("data status = "+data.status);
		                if(data.status=='OK')
		                {
			                console.log("Inside PUT Method success data successfully transmitted");
		                }
		                else
		                {
			                console.log('Inside PUT Method success Failed adding person: ' + data.status + ', ' + data.errorMessage);
			
		                }  
		            }
		            
		        });
   
    $(this).parents('tr').remove();
});


var userId;

$('body').on('click','.update-button',function(){
	
		    console.log("inside update");
		    console.log("userId = "+userId);
		    
		
		    const name=$(this).parents('tr').find("input[name='name-edit-text']").val();
		    console.log("update name ="+name);
		
		    const age=$(this).parents('tr').find("input[name='age-edit-text']").val();
		    console.log("update age ="+age);
		
		    const gender=$(this).parents('tr').find("input[name='gender-edit-text']").val();
		    console.log("update age ="+gender);
		
		    const email=$(this).parents('tr').find("input[name='email-edit-text']").val();
		    console.log("update age ="+email);
		    
		    const dob=$(this).parents('tr').find("input[name='dob-edit-text']").val();
		    console.log("update age ="+dob);
		
		    const phone=$(this).parents('tr').find("input[name='phone-edit-text']").val();
		    console.log("update age ="+phone);
		    
		    
		    $.ajax({
		          
			    'type': 'PUT',
			    'url': `updateuser/${userId}`,
			    'async': 'false',
		        'data': JSON.stringify({
			        id: userId,
		            name: name, 
		            age : age, 
		            gender : gender, 
		            email : email, 
		            dob : dob, 
		            phone : phone, 
		            
		        }),
		        headers: {
			      'Accept': 'application/json',
			      'Content-Type': 'application/json'
			    },
		        success: function (data) {
			
		               
		                console.log("Inside PUT Method success");
		                console.log("data status = "+data.status);
		                if(data.status=='OK')
		                {
			                console.log("Inside PUT Method success data successfully transmitted");
		                }
		                else
		                {
			                console.log('Inside PUT Method success Failed adding person: ' + data.status + ', ' + data.errorMessage);
			
		                }  
		            }
		            
		        });
		    
		    
		
		    $(this).parents('tr').find("td:eq(0)").text(name);
		    $(this).parents('tr').find("td:eq(1)").text(age);
		    $(this).parents('tr').find("td:eq(2)").text(gender);
		    $(this).parents('tr').find("td:eq(3)").text(email);
		    $(this).parents('tr').find("td:eq(4)").text(dob);
		    $(this).parents('tr').find("td:eq(5)").text(phone);
		
		    $(this).parents('tr').find(".edit-button").show();
		    $(this).parents('tr').find(".update-button").remove();


   });


$('body').on('click','.edit-button',function(){
    
    var col1=$(this).parents('tr').text(); // fetch complete data of row // not code relevant
    console.log("name0="+col1);
    
    var name=$(this).parents('tr').find("td:eq(0)").text();  // fetch value of column
    console.log("name = "+name);

    var age=$(this).parents('tr').find("td:eq(1)").text();  // fetch value of column
    console.log("age = "+age);

    var gender=$(this).parents('tr').find("td:eq(2)").text();  // fetch value of column
    console.log("age = "+gender);
    
    var email=$(this).parents('tr').find("td:eq(3)").text();  // fetch value of column
    console.log("age = "+email);

    var dob=$(this).parents('tr').find("td:eq(4)").text();  // fetch value of column
    console.log("age = "+dob);

    var phone=$(this).parents('tr').find("td:eq(5)").text();  // fetch value of column
    console.log("age = "+phone);
    
    userId=phone+name;

    $(this).parents('tr').find("td:eq(0)").html(`<input name='name-edit-text' type="text" value=`+"'"+name+"'"+`>`)
    $(this).parents('tr').find("td:eq(1)").html(`<input name='age-edit-text' type="text" value=`+"'"+age+"'"+`>`)
    $(this).parents('tr').find("td:eq(2)").html(`<input name='gender-edit-text' type="text" value=`+"'"+gender+"'"+`>`)
    $(this).parents('tr').find("td:eq(3)").html(`<input name='email-edit-text' type="text" value=`+"'"+email+"'"+`>`)
    $(this).parents('tr').find("td:eq(4)").html(`<input name='dob-edit-text' type="text" value=`+"'"+dob+"'"+`>`)
    $(this).parents('tr').find("td:eq(5)").html(`<input name='phone-edit-text' type="text" value=`+"'"+phone+"'"+`>`)

    $(this).parents('tr').find("td:eq(6)").prepend('<button class="update-button" type="button">Update</button>');
    $(this).hide();
    
});

$(".fname").keyup(function(){
    var name=$(".fname").val();
    console.log(name);

    var res = name.match(/\d+/g);  // \d=word,digit,white spaces , a+ mean one or more character
    if (res != null || name=="") {
        if(res!=null)
          $('.nameformerror').html('number are not allowed !!').removeClass('ok');
        else if(name=="")
          $('.nameformerror').html('name should not be Blank !!').removeClass('ok');
    }
    else{
        $('.nameformerror').html('OK !!').addClass('ok');
    }
});

$(".fcpass").keyup(function(){
    var pass=$(".fpass").val();
    var cpass=$(".fcpass").val();
    console.log("pass = "+pass);
    console.log("confirmPass = "+cpass);

    if(cpass!=pass)
    {
        $('.confirmformerror').html('Password Mis-match!!').removeClass('ok');
    }
    else{
        $('.confirmformerror').html('OK !!').addClass('ok');
    }

   
});

$(".fage").keyup(function(){

        var age=$(".fage").val();
        var regExp = /[a-z]/i;
        console.log(age);

        if(regExp.test(age) || age=="")
        {
            if(regExp.test(age))
             $('.ageformerror').html('Alphabets are not Allowed !!').removeClass('ok');
            else if(age=="")
             $('.ageformerror').html('age should not be Blank!!').removeClass('ok');
        }
        else
        {
            $('.ageformerror').html('OK !!').addClass('ok');
        }
});


$(".gender").mouseenter(function(){
 
    var gender=$("input[name='fgender']:checked").val();

        console.log("gender = "+gender);

        if(gender==undefined)
        {
            $('.genderformerror').html('Gender is required !!').removeClass('ok');
        }
        else{
            $('.genderformerror').html('OK !!').addClass('ok');
        }
});

$(".gender").click(function(){
 
    var gender=$("input[name='fgender']:checked").val();

        console.log("gender = "+gender);

        if(gender==undefined)
        {
            $('.genderformerror').html('Gender is required !!').removeClass('ok');
        }
        else{
            $('.genderformerror').html('OK !!').addClass('ok');
        }
});

$(".fphone").keyup(function(){
 
    var phone=$(".fphone").val();
    var regExp = /[a-z]/i;
    console.log(phone);

    if(regExp.test(phone) || phone=="" || phone.length<10)
    {
        if(regExp.test(phone))
         $('.phoneformerror').html('Alphabets are not Allowed !!').removeClass('ok');
        else if(phone=="")
         $('.phoneformerror').html('phone should not be Blank !!').removeClass('ok');
        else if(phone.length!=10)
         $('.phoneformerror').html('Enter 10 digits !!').removeClass('ok');


    }
    else
    {
        $('.phoneformerror').html('OK !!').addClass('ok');
    }
    
});

$(".femail").keyup(function(){
 
    var email=$(".femail").val();
    var regExp = /^([_\-\.0-9a-zA-Z]+)@([_a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    console.log(email);
    console.log("here = "+regExp.test(email));

    if(!regExp.test(email) || email=="")
    {
        if(!regExp.test(email))
         $('.emailformerror').html('Enter a Valid Email!!').removeClass('ok');
        else if(email=="")
         $('.emailformerror').html('Email should not be Blank !!').removeClass('ok');
    }
    else
    {
        $('.emailformerror').html('OK !!').addClass('ok');
    }
    
});

$(".fdob").keyup(function(){
 
    var dob=$(".fdob").val();
    var regExp = /([0-3])([0-9])\/([0-1])([0-9])\/([1-2])([0-9])([0-9])([0-9])/;
    console.log(dob);

    if(!regExp.test(dob) || dob=="")
    {
        if(!regExp.test(dob))
         $('.dateformerror').html('enter date in valid format !!').removeClass('ok');
        else if(dob=="")
         $('.dateformerror').html('date should not be Blank!!').removeClass('ok');
    }
    else
    {
        $('.dateformerror').html('OK !!').addClass('ok');
    }


 });

$(".fpass").keyup(function(){
    console.log('fxn working');
    var pass=$(".fpass").val();
        console.log("pass="+pass);


        var smallAlpha=false;
        var bigAlpha=false;
        var containNumber=false;
        var containSpecialSymbol=false;
        


        for (i = 97; i <= 122; i++) 
        {
          var smallChar=String.fromCharCode(i);
            for (let j = 0; j < pass.length; j++)
            {
                if(pass[j]==smallChar)
                {
                    smallAlpha=true;
                    break;
                }
            }
        }

        for (i = 97; i <= 122; i++) 
        {
          var bigChar=String.fromCharCode(i);
            for (let j = 0; j < pass.length; j++) {
                if(pass[j]==bigChar.toUpperCase())
                {
                    bigAlpha=true;
                    break;
                }
            }
        }

        for(i=0 ; i<=9 ; i++)
        {
            for (let j = 0; j < pass.length; j++) {
                if(pass[j]==i)
                {
                    containNumber=true;
                    break;
                }
            }
        }

        var specialChar="!@#$%^&*";

        for(i=0 ; i<specialChar.length;i++)
        {
            var spChar=specialChar[i];

            for (let j = 0; j < pass.length; j++) {
                if(pass[j]==spChar)
                {
                    containSpecialSymbol=true;
                    break;
                }
            }
        }

        

        console.log("smallAlpha = "+smallAlpha);
        console.log("bigAlpha = "+bigAlpha);
        console.log("containNumber = "+containNumber);
        console.log("containSpecialSymbol = "+containSpecialSymbol);
        
        if(!smallAlpha)
        {
            $('.lowercase').html('include lowercase !!').removeClass('ok');
        }
        else{
            $('.lowercase').html('')
        }

        if(!bigAlpha)
        {
            $('.uppercase').html('include Uppercase !!').removeClass('ok');
        }
        else{
            $('.uppercase').html('')
        }
        if(!containNumber)
        {
            $('.number').html('include Number !!').removeClass('ok');
        }
        else{
            $('.number').html('')
        }
        if(!containSpecialSymbol)
        {
            $('.symbol').html('include Special Symbol !!').removeClass('ok');
        }
        else{
            $('.symbol').html('')
        }

        if(bigAlpha && smallAlpha && containNumber && containSpecialSymbol)
        {
            $('.lowercase').html('OK !!').addClass('ok');
        }
  });