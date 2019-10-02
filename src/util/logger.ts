import Color, { green, red, blue, yellow, Format } from 'cli-color'

class Console {
  public color = Color
  public success = (text: string): void => console.log(green(text));
  public info = (text: string): void => console.log(yellow(text));
  public error = (text: string): void => console.log(red(text));
  public log = (text: string): void => console.log(blue(text));
  public custom = (text: string, color: Format): void => console.log(color(text));
}

export default new Console()
