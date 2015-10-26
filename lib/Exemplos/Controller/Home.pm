package Exemplos::Controller::Home;
use Mojo::Base 'Mojolicious::Controller';

sub index {
  my $self = shift;

  # Render template "example/welcome.html.ep" with message
  $self->render(msg => 'Welcome to the Mojolicious real-time web framework!');
}

1;
