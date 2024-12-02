<h1>Projeto Generico Expo</h1>
<p>Projeto padrão para inicio de desenvolvimento</p>
<p>usando Expo com ambiente de configurado.</p>
<hr>
<h2>Navegação</h2>
<p>Projeto já configurado com Expo Router V4, também com drawer já instalado, <a href='https://docs.expo.dev/router/advanced/drawer/' target='_blank'>Clique Aqui.</a>.</p>
<p>Deve ir atualizando conforme necessidade do dev.</p>
<hr>
<h2>React Hook Forms</h2>
<p>Já instalado, lembre de usar a parte especifica para react native</p>
<p>na documentação do react rook forms: <a href='https://react-hook-form.com/get-started#ReactNative' target='_blank'>Clique aqui</a></p>
<hr>
<h2>Immer</h2>
<p>Immer instalado, uma lib muito show para manipulação de estados.<a href='https://immerjs.github.io/immer/' target='_blank'>Clique aqui</a></p>
<hr>
<h2>Gluestack V1</h2>
<p>Retiramos o Native base, pois o mesmo foi "substituido" pelo Gluestack</p>
<hr>
<h2>MMKV</h2>
<p>hoje é o pacote de armazenamento interno mais rapido para react.</p>
<p><a href='https://github.com/mrousavy/react-native-mmkv' target='_blank'>Documentação aqui</a></p>
<hr>
<h1>Configurando Push Notifications</h1>
<ol>
    <li>As notificações do Expo, trabalham com o expo intermediando as rquisições, essas por sua vez, são transmitidas via Firebase (android) ou APNS(apple):
      <img src="ReadMe/sending-notification.png" alt="" />
    </li>
    <ol>
        <li>Por conta disso, vamos instalar as seguintes dependencias:
          <ol>
            <li>
              <code>
                npx expo install expo-notifications expo-device expo-constants
              </code>
            </li>
            <li>
              <code>
                npx expo install @react-native-firebase/app
              </code>
            </li>
          </ol>
        </li>
    </ol>
  <li>
    Com as dependencias instaladas, vá até seu app.json e adicione "@react-native-firebase/app" no array de plugins:
    <code>
      "plugins": [
      "@react-native-firebase/app"
      ]
    </code>
  </li>
  <li>
    Agora, iremos criar um projeto no FireBase (caso ainda não tenha):
    <ol>
      <li>
        Faça login no site do <a href="https://firebase.google.com/" target="_blank">FireBase</a> e clique em "Criar Projeto"
        <img src="ReadMe/criarProjeto.png">
      </li>
      <li>
        De um nome para o projeto e clique "Continuar".
        Na próxima tela, onde está escrito "Ativar o Google Analytics neste projeto" é da sua escolha deixar ou não.
        <br>
        Crie o Projeto.
      </li>
      <li>
        Clique em Android em "adicione ao projeto:
        <br>
        <img src="ReadMe/addAoProjeto.png">
        <br>
        <ol>
          <li>
          Nesta proxima tela, você precisará colocar em "Nome do Pacote do Android" o mesmo nome do seu package que está no seu app.json:
          <code>
            "expo":{
              "android": {
                "package": "nomedoseupackage"
              }
            }
          </code>
          </li>
          <li>
            <p>Caso ainda nunca tenha feito um build, vamos lá:</p>
            <ol>
              <li>
                <p>Adicone o script abaixo no seu package.json pois é um comando que você pode acabar usando mais vezes:</p>
                <code>
                    "scripts": {
                    "clean": "npx expo prebuild --clean"
                    },
                </code>
                <p>Rode o comando npm run clean.</p>
                <p>Quando rodar, caso não tenha package no eu app.json, esse comando irá te perguntar qual o nome que você quer atribuir.</p>
                <p>Muita atenção neste ponto, pois os smartphones e a playstore utilizam esse nome, como se fosse o endereço do seu app.</p>
                <p>1x publicado na playStore, o endereço não pode mudar!</p>
                <p>Para ter um entendimento prático, é isso que a loja usa para identificar um aplicativo que já está instalado, para saber se tem que instalar do zero, ou fazer uma atualização.</p>
              </li>
              <li>
                <p>Agora coloque este nome com.user.projetonome (é só um exemplo heim!) no seu projeto do fireBase e clique em registar:</p>
                <img src="ReadMe/RegisterApp.png">
              </li>
              <li>
                <p>Faça o download do google-services.json e coloque na raiz do seu projeto.</p>
                <p>Pode ir clicando em próximo até voltar para o console.</p>
              </li>
            </ol> 
          </li>
        </ol>
      </li>
    </ol>
  </li>
  <li>
    <p>Vá até as configurações do projeto, clicando no menu superior esquerdo (engrenagem)</p>
    <img src="ReadMe/configProjeto.png">
    <p>Vá para a aba Contas de Serviço e clique em Gerar Nova chave Privada e salve o arquivo no pc.</p>
  </li>
  <li>
    <p>Lembre-se do Diagrama inicial?</p>
    <p>Por conta de como funciona o Push Notificantions, você precisa ter uma conta no Expo.</p>
    <a href="https://expo.dev">Site do Expo</a>
    <ol>
      <li>
        <p>Com sua conta criada, crie um projeto na aba de projetos, esse projeto precisa de um nome e um slug, identifique do jeito que quiser.</p>
      </li>
      <li>
        <p>No app.json adicione o seguinte:</p>
        <code>
        "expo":{
          "slug": "slug do projeto expo.",
          "extra": {
            "eas": {
              "projectId": "Id do projeto"
            },
          "owner": "nome da conta (normalmente)"
            }
          }
        </code>
        <p>se tiver alguma dúvida, basta clicar no projeto criado que vai ter em 1 unica linha, as 3 informações necessárias.</p>
      </li>
      <li>
        <p>Agora, no menu esquerdo do Expo, procure pela aba Credentials</p>
        <p>Clique no projeto que irá aparecer nesta tela.</p>
        <p>Descendo a tela, irá encontrar o campo - FCM V1 service account key - agora suba o arquivo que você salvou no seu pc, do fireBase.</p>
      </li>
      <li>
        <p>Rode o comando Clean <code>npm run clean</code></p>
      </li>
    </ol>
  </li>
  <li>
    <p>Agora, precisamos logar na conta da expo, pelo EAS, caso nunca tenha ouvido falar, é com a EAS que você envia seu projeto para a Expo</p>
    <p>Faça login com o comando <code>eas login</code></p>
    <p>rode o build para a eas (não precisa esperar, aperte CTRL+C para sair quando o processo iniciar) <code>eas build</code></p>
  </li>
  <li>
    <h2>Hora de testar</h2>
    <h3>Crie o hook usePushNotifications.ts</h3>
    <p>
      <code>
        import { useState, useEffect, useRef } from 'react'
        import { Platform } from 'react-native'
        import { registerForPushNotificationsAsync } from '@/libs/notifications/registerForPushNotificationsAsync'
        import Constants from 'expo-constants'
        import * as Device from 'expo-device'
        import * as Notifications from 'expo-notifications'
        export interface PushNotificationState {
          notification?: Notifications.Notification
          expoPushToken?: Notifications.ExpoPushToken
        }
        const usePushNotifications = (): PushNotificationState => {
          Notifications.setNotificationHandler({
            handleNotification: async () => ({
              shouldShowAlert: true,
              shouldPlaySound: true,
              shouldSetBadge: true,
            }),
          })
          const [expoPushToken, setExpoPushToken] = useState<
            Notifications.ExpoPushToken | undefined
          >()
          const [notification, setNotification] = useState<
            Notifications.Notification | undefined
          >()
          const notificationListener = useRef<Notifications.Subscription>()
          const responseListener = useRef<Notifications.Subscription>()
          useEffect(() => {
            registerForPushNotificationsAsync({ Constants, Device, Platform }).then(
              (token) => setExpoPushToken(token),
            )
            notificationListener.current =
              Notifications.addNotificationReceivedListener((notification) => {
                notification.request.content.data = { ID: 'TESTE' }
                notification.request.content.sound = 'custom'
                setNotification(notification)
              })
            responseListener.current =
              Notifications.addNotificationResponseReceivedListener((response) => {
                const json: {
                  ids: {
                    id: string
                  }[]
                } = JSON.parse(
                  response.notification.request.trigger.remoteMessage.data.body,
                )
                json.ids.forEach((id) => {
                  console.log(id.id)
                })
              })
            return () => {
              notificationListener.current &&
                Notifications.removeNotificationSubscription(
                  notificationListener.current,
                )
              responseListener.current &&
                Notifications.removeNotificationSubscription(responseListener.current)
            }
          }, [])
          return {
            expoPushToken,
            notification,
          }
        }
        export default usePushNotifications
      </code>
    </p>
  </li>
  <li>
  <p>faça um console.log de expoPushToken para pegar o token</p>
  <p>Teste no Notifications Push Tool do expo: <a href="https://expo.dev/notifications">Tool</a></p>
  </li>
</ol>
<hr>
<h2>Gerando Build sem Expo.</h2>
<ol>
    <li>Entre na pasta do aplicativo
      <ol>
        <li>Rode os comandos abaixo para gerar os arquivo de keystore (chave). Uma linha de comando de cada vez</li>
        <li>
          keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048
          -validity 10000
          <ol>
            <li>algumas perguntas serão feitas, lembre de colocar uma senha segura.</li>
          </ol>
        </li>
        <li>
          keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity
          10000
          <ol>
            <li>algumas perguntas serão feitas, lembre de colocar uma senha segura.</li>
          </ol>
        </li>
        <li>Ao finalizar serão gerados os arquivos das chaves na pasta ao app (my-release-key.keystore e
          my-upload-key.keystore).</li>
      </ol>
    </li>
    <li>Copie as chaves e cole na pasta app que fica dentro da pasta android do seu projeto ({seuApp}\android\app)</li>
    <li>Agora vamos configurar as váriaveis do Gradle
      <ol>
        <li>Na pasta android do seu projeto ( {seuApp}\android ) no arquivo gradle.properties insira os comandos a
          seguir:
          <ol>
            <li><p>MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore</p>
            <p>MYAPP_UPLOAD_KEY_ALIAS=my-key-alias</p>
            <p>MYAPP_UPLOAD_STORE_PASSWORD=***Senha que vc digitou antes***</p>
            <p>MYAPP_UPLOAD_KEY_PASSWORD=***Senha que vc digitou antes***</p>
            </li>
          </ol>
        </li>
      </ol>
    </li>
    <li>Na pasta ( {seuApp}\android\app ) no arquivo build.gradle insira os comandos dentro de android {signingConfigs}
      <ol>
        <li>
          <p>release {</p>
          <p> if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {</p>
          <p> storeFile file(MYAPP_UPLOAD_STORE_FILE)</p>
          <p>storePassword MYAPP_UPLOAD_STORE_PASSWORD</p>
          <p>keyAlias MYAPP_UPLOAD_KEY_ALIAS</p>
          <p>keyPassword MYAPP_UPLOAD_KEY_PASSWORD</p>
          <p>}</p>
          <p>}</p>
        </li>
        <li>
          <p>(e dentro do buildTypes) insira o comando:</p>
          <p>release {</p>
          <p>signingConfig signingConfigs.release</p>
          <p>}</p>
        </li>
      </ol>
    </li>
    <li>Gerando o arquivo APK
      <ol>
        <li>
          <p>No prompt digite o comando dentro da pasta ( Android ) do seu App digite:</p>
          <p>.\gradlew assembleRelease</p>
        </li>
        <li>
          <p>Para gerar o AAB para publicar na google play digite o comando:</p>
          <p>.\gradlew bundleRelease</p>
        </li>
      </ol>
    </li>
    <li>O APK se encontrará na pasta
      <ol>
        <li>
          <p>...\android\app\build\outputs\apk\release</p>
        </li>
        <li>
          <p>O AAB se encontrará na pasta</p>
          <p>...\android\app\build\outputs\bundle\release</p>
        </li>
      </ol>
    </li>
  <ol>