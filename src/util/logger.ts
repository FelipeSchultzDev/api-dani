import { green, red, blue, yellow } from 'cli-color'

class Console {
  public success = (text: string): void => console.log(green(text));
    public info = (text: string): void => console.log(yellow(text));
    public error = (text: string): void => console.log(red(text));
    public log = (text: string): void => console.log(blue(text));
}

export default new Console()
