$(document).ready( function(){
    $("#formulario").submit(function(){
        var url ="enviar2.php";
        $.ajax({
            type:"POST",
            url:url,
            data: ("#formulario").serialize(),
            success: function(data)
            {
                $("#resultado").html(data);
            }
        });
        return false;
}); });