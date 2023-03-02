import type { CalculatorResponse } from "../schema/calculator-response" 

type HomeSizeParamsType = {
   [key: string]: CalculatorResponse
}

export const PRICING_PARAMS: HomeSizeParamsType = {
   A: {
      bronze: 450,
      silver: 675,
      gold: 1000,
      platinium: 1190,
   },
   B: {
      bronze: 500,
      silver: 725,
      gold: 950,
      platinium: 1190,
   },
   C: {
      bronze: 600,
      silver: 775,
      gold: 875,
      platinium: 1190,
   },
   D: {
      bronze: 700,
      silver: 875,
      gold: 1290,
      platinium: 1190,
   },
} 
