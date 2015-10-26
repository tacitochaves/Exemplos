package Exemplos::Controller::Modelos;
use Mojo::Base 'Exemplos::Controller::Base';

sub banco {
    my $self = shift;

    my $usuario = { 
        usuario => $self->param('usuario'), 
        senha => $self->param('senha'),
    };

    $self->respond_to(
        json => { json => $usuario },
        html => { html => 'modelos/banco' },
    );
}

1;
