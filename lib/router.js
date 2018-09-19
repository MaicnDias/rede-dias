FlowRouter.route("/", {
    action: function(params, queryParams) {
        if(Meteor.userId() === null) {
            BlazeLayout.render("LayoutPrincipal", {main: "Inicio"});    
        } else {
            FlowRouter.go("/feed");
        }
    }
});

FlowRouter.route("/sobre", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Sobre"});
    }
});

FlowRouter.route("/suporte", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Suporte"});
    }
});

FlowRouter.route("/feed", {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Feed"});
    }
});

FlowRouter.route("/perfis/:id", {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Perfil"});
    }
});