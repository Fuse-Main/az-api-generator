import Generator, { BaseOptions } from 'yeoman-generator';

type Languages = "C#" | "TypeScript" | "JavaScript";
type Versions = 1 | 2 | 3 | 4;

type DestinationFolders = {
    httpModels?: string;
    businessLogic?: string;
    functionWrapper?: string;
}

type AzFuncOptions =  BaseOptions & {
    name: string;
    language: Languages;
    version: Versions;
    destinationFolders: DestinationFolders;
}

class ThingGenerator extends Generator<ThingGeneratorOpts> {
  constructor(args: string | string[], opts: ThingGeneratorOpts) {
    super(args, opts);

    this.argument('name', {
      required: true,
      type: String,
      description: 'The name of the thing',
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('template1.js.tpl'),
      this.destinationPath(
        `src/things/${this.options.name}.js`,
      ),
    );
  }
}

export default ThingGenerator;