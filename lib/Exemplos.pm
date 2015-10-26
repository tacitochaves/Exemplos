package Exemplos;
use Mojo::Base 'Mojolicious';

# This method will run once at server start
sub startup {
    my $self = shift;

    # Router
    my $r = $self->routes;

    $r->namespaces( ["Exemplos::Controller"] );

    $r->any('/')->to( controller => 'Dashboard', action => 'index' );
    $r->any('/lancamento')->to( controller => 'Lancamento', action => 'index' );
    $r->any('/cadastro')->to( controller => 'Cadastro', action => 'index' );
    $r->any('/consulta')->to( controller => 'Consulta', action => 'index' );
    $r->any('/administracao')->to( controller => 'Administracao', action => 'index' );
    #$r->any('/ajax')->to( controller => 'Modelos', action => 'banco' );
}

1;
