import express from 'express'
import { trendCountry, countryTrend } from '../controllers/songController'

const trendRouter = express.Router()
trendRouter.get('/', trendCountry)
trendRouter.get('/:country/:countryId', countryTrend)

export default trendRouter
