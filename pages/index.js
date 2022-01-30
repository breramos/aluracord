import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

function Title(props) {
    console.log(props);
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['500']};
                    font-size: 28px;
                    font-weight: 600;
                }

            `}</style>
        </>
    );
}

//Componente react
//function HomePage() {
    //return (
        //<div>
            //<GlobalStyle />
            //<Title tag="h2">Boas vindas de volta!</Title>
            //<h2>Discord - Alura Matrix</h2>
        //</div>
    //)
//}
  
//export default HomePage


export default function PaginaInicial() {
    //const username = 'breramos';
    const [username, setUsername] = React.useState('breramos'); //a palavra use é um padrão do react para interceptar coisas, é um gancho tipo um cookie
    const roteamento = useRouter();
    const dados = fetch('https://api.github.com/users/breramos');
    fetch('https://api.github.com/users/breramos')
    .then(function(respostaDoServidor) {
        return respostaDoServidor.json ()
    })
    .then (function(respostaConvertida) {

    })

    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'right',
            backgroundColor: appConfig.theme.colors.neutrals[100],
            backgroundImage: 'url(https://images.unsplash.com/photo-1467811884194-ae868cd3f090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 10%)',
              backgroundColor: appConfig.theme.colors.neutrals[300],  //#9AA5B1 referente ao 300
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function  (infosdoEvento) {
                infosdoEvento.preventDefault();
                roteamento.push('/chat');
                //window.location.href = '/chat';  o next é quem faz o roteamento de páginas e esse é o jeito tradicional do navegador de fazer isso. Cor 600 = #29333D
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '60%' }, textAlign: 'center', marginBottom: '0px',
              }}
            >
              <Title tag="h2">Boas vindas de volta!</Title>
                {appConfig.h2}
              <Text variant="body3" styleSheet={{ marginBottom: '32px', marginTop: '10px', fontSize: '18px', color: appConfig.theme.colors.neutrals[600]}}> 
                {appConfig.name}
              </Text>  
  
              <TextField
                value={username}
                onChange={ function (event) {
                  console.log('usuario digitou', event.target.value);
                  //Onde está o valor?
                  const valor = event.target.value;
                  //Trocar o valor da variável
                  //através do React e avisar quem precisa
                  setUsername(valor);
                
                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[700],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[500],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[600],
                  mainColorStrong: appConfig.theme.colors.primary[700],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[300],
                //border: '1px solid',
                //borderColor: appConfig.theme.colors.neutrals[100],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }
