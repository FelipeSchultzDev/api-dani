import { model } from 'mongoose'
import { ValidationError } from 'joi'
import md5 from 'md5'

class Util {
  public cpfValidation (cpf: string): boolean {
    cpf = cpf.replace('.', '').replace('.', '').replace('.', '').replace('-', '')
    var Soma
    var Resto
    Soma = 0
    if (cpf === '00000000000') return false

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
    Resto = (Soma * 10) % 11

    if ((Resto === 10) || (Resto === 11)) Resto = 0
    if (Resto !== parseInt(cpf.substring(9, 10))) return false

    Soma = 0
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
    Resto = (Soma * 10) % 11

    if ((Resto === 10) || (Resto === 11)) Resto = 0
    if (Resto !== parseInt(cpf.substring(10, 11))) return false
    return true
  }

  public celValidation (celular: string): boolean {
    let regex = /^\(\d{2}\)[\s\S](9|)[6789]\d{3}-\d{4}$/
    return regex.test(celular)
  }

  public encode (password: string): string {
    return md5(password)
  }

  public joiErrorConvert (errorList: ValidationError): Error[] {
    const newErrorList = errorList.details.map((err): Error => {
      return {
        message: err.message,
        field: err.context.key
      }
    })

    return newErrorList
  }

  public convertToError (message: string, field: string): Error {
    return {
      message,
      field
    }
  }

  public async validate (id: string, data, schema, fieldsInclude?: string[]): Promise<string> {
    const where = this.createOrValidator(data, fieldsInclude)

    const validate = await model(schema).find(where)

    console.log(validate)
    return ''
  }

  private createOrValidator (data, fieldsInclude?: string[]): Or {
    const validateList = { $or: [] }

    Object.keys(data).forEach((key): void => {
      if (fieldsInclude && fieldsInclude.includes(key)) {
        validateList.$or.push({ [key]: data[key] })
      }
    })

    return validateList
  }
}

export default new Util()

interface Error {
  message: string;
  field: string;
}
interface Or {
  $or: { [key: string]: any }[]
}
