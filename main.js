function handleTicketPusrchase(){
   
    let text = 'היי אני מעוניין בלרכוש כרטיס למסיבה שלכם, זה הפרטים שלי: \n'; 
    text += 'שם:'+ document.querySelector("input[name='name']").value
    text += '\n טלפון:'+ document.querySelector("input[name='phone']").value
    text += '\n ת.ז:'+ document.querySelector("input[name='id']").value
    text += '\n הגעתי דרך:'+ document.querySelector("input[name='directby']").value

      window.location.href = `https://wa.me/972557290867?text=${text}`;

}
alert("אזלו הכרטיסים, תודה רבה!");