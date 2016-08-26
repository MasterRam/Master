document.title="Python"
$(document).ready(function () {
    $("#button").click(function (event) {
        var id = $('#id').val();
            $.ajax({
                 type:"POST",
                 url: parseInt(id) >0? "/update/":"/add/",
                 data: {
                            id:parseInt(id),
                            name:$('#name').val(),
                            age:$('#age').val(),
                            join_date:$('#join_date').val(),
                            job_title:$('#job_title').val()
                        },
                 done: function (a) {
                     alert(a);
                     alert("success");
                 }
            });
            setTimeout(function () {
                $('#id').val(0);
                //window.location.href = "/employee/";
            }, 2000);
            

       });
       $('.doToggle').click(function (event) {
           
            $(event.target).next(".toggle").toggle();
             //$('#itc').toggle();
       })
       $(".toggle").hide();
});