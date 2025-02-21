import { createMachine } from "xstate";

export const videoMachine = createMachine({
   id: 'videoPlayer',
   initial: 'closed', //начальный стейт
   states: {
      closed: {
         on:{ OPEN: 'open' } //переход в состояние open
      },
      open: {
         on: { CLOSE: 'closed', MINIMIZE: 'minimized' } //закрытие / минимизация
      },
      minimized: {
         on: {EXPAND: 'open', CLOSE: 'closed'} //развернуть / закрыть
      }
   }
})