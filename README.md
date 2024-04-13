# Тестовое задание для компании O-complex
## Реализованные фичи:
---
- Приложение адаптировано под моб.устройства и планшеты
- Наполнение контентом отзывов из html обернутого в JSON + защита от XSS атак с помощью библиотеки 'xss'
- Наполнение контентом из API - первая страница загружается сразу же, остальные загружаются запросом на сервер при скролле с использованием библиотеки react-intersection-observer
- При нажатии на кнопку "Купить" она меняется на "-" и "+" и поле для ввода кол-ва товара, значение поля изначально равно 1, кнопки добавляют и отбалвляют товар, так же есть возможность вписать в поле ввода любое количество. Вписывать можно только числа
- При изменение кол-ва товаров они меняются и в корзине
- Набранные товары и телефон в корзине сохраняются при перезагрузке страницы. Используется localstorage, при сабмите формы данные очищаются локально в и localstorage
- Маска для номера телефона с помощью библиотеки react-input-mask
- При нажатии на кнопку заказать идет проверка того, что номер введен полностью и корзина не пустая. Если все хорошо отправляем запрос на сервер, если нет, подсвечиваем инпут красным либо выводим сообщение что корзина пустая
- После успешной отправки данных на сервер отображаем модальное окно и информируем пользователя об успешной отправке
---
-В проекте учитывается то, что название товара и описание могут быть длиннее предложенных
-Добавлен спиннер загрузки при скролле, при загрузке всего приложения, при загрузке списка товаров
-Для операций с состоянием была использована комбинация useContext + useReducer. Также использовалась библиотека Immer для безопасной работы с мутабельными данными
-Использование библиотеки react hook form позволило уменьшить время разработки продукта. В целом, этол библиотека имеет ряд преимуществ над нативными формами - более быстрый рендер, готов функционал который покрывает большой процент кейсов при работе с формами, возможность интеграции с сторонними библиотеками (в данном случае react-input-mask)
-Для стилизации использовался TailwindCSS 
-SSR Используется там, где это было возможно(насколько позволяет моя первоначальная оценка)
-В целом, проект может быть доработан для лучшей производительности.  
