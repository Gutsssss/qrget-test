# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Для просмотра задеплоеного проекта
```
# Переходим на сайт https://qrget-test.netlify.app

Вам представлена главная страница которая доступна всем пользователям
Для создания своего собственного QR-кода переходим на страницу https://qrget-test.netlify.app/create
Данная ссылка доступна только авторизованным пользователям (вы можете зайти через google почту или под тестовым пользователем email:test.test@mail.ru password:123456).
Ссылка https://qrget-test.netlify.app/feedback предназначена для отправки отзывов пользователей (только авторизованых).
```
## Авторизация реализована через firebase
```
Была включена только авторизаия, авторизоваться можно только по тестовой почте либо через google
```
## Дизай и UI
```
Я решил использовать библеотеку elemtn-plus, считаю что данная библеотка легка в понимании, хоть и не такая масштабируемая как например Tailwind
Плюсом писал свои стили
```
## Прочее
```
Основным фрейморком я решил использовать Nuxt js, в нем очень быстрая настройка лейаутов и роутинга между страницами, удобно подключать модули ,так же разбивает код на чанки загружая только необходимые части приложения,авто импорт компонентов.
Для перевода страницы на другие языки я использвал библеотеку i18n
Для этого я реализовал храниние значнеия языка в localStorage, так же как и email пользователя для того что бы данные подтягивались в форму для обратной связи

```
