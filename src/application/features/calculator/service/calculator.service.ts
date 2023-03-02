import type { CalculatorRequest, CalculatorResponse } from '../schema'
import { PRICING_PARAMS } from '../constants/home-size-params'
import { ROOMS } from '../constants/data'

export class CalculatorService {
   constructor(readonly data: CalculatorRequest) {}

   private getSize(size: number) {
      if (size <= 200 && size > 150) return 'A'
      if (size <= 150 && size > 100) return 'B'
      if (size <= 100 && size > 50) return 'C'
      if (size <= 50) return 'D'
      return 'D'
   }

   private houseModifier(type: 'Casa' | 'Apartamento') {
      if (type === 'Casa') return 0.97
      else return 1
   }

   private rounder(num: number) {
      return parseFloat(num.toFixed(2))
   }

   execute() {
      let bronze = 0
      let silver = 0
      let gold = 0
      let platinium = 0
      const {
         home: { size, type },
         rooms,
      } = this.data
      const fullPrices = PRICING_PARAMS[this.getSize(size)]
      rooms.forEach((room) => {
         ROOMS.forEach((r) => {
            if (r.name === room) {
               bronze +=
                  (fullPrices.bronze * size * r.represents) /
                  this.houseModifier(type)
               silver +=
                  (fullPrices.silver * size * r.represents) /
                  this.houseModifier(type)

               gold +=
                  (fullPrices.gold * size * r.represents) /
                  this.houseModifier(type)
               platinium +=
                  (fullPrices.platinium * size * r.represents) /
                  this.houseModifier(type)
            }
         })
      })

      return {
         bronze: this.rounder(bronze),
         silver: this.rounder(silver),
         gold: this.rounder(gold),
         platinium: this.rounder(platinium),
      } as CalculatorResponse
   }
}
