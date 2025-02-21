import { createMachine } from "xstate";

export const videoMachine = createMachine({
   id: 'videoPlayer',
   initial: 'closed', //начальный стейт
   states: {
      closed: {
         on:{ OPEN: 'Open' } //переход в состояние open
      },
      open: {
         on: { CLOSE: 'closed', MINIMIZE: 'minimized' } //закрытие / минимизация
      },
      mimeized: {
         on: {EXPAND: 'open', CLOSE: 'closed'} //развернуть / закрыть
      }
   }
})