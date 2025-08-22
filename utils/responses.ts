import type {Response} from 'express'

export function successResponse (res:Response , data:any , message:string = ""){
  return res.status(200).json({
    data: data,
    message: message,
    success: true
  })
}

export function errorResponse (res:Response , status:number, error:string ){

  return res.status(status).json({
    error: error,
    success: false,
    
  })
}