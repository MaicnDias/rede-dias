Template.Feed.events({
    "submit form": function(evento, template) {
        evento.preventDefault();
        var textoDoFormulario = evento.target.texto.value;
        console.log(textoDoFormulario);
        Posts.insert({
            texto: textoDoFormulario
        });
    }
});