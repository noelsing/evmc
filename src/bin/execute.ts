import commands from '../commands';
import { CommandTypes } from '../commands/command-types';
import Helpers from '../common/helpers';
import { Logger } from '../common/logger';

/**
 * Execute the CLI commands
 * @param packageVersion The package version
 */
export async function execute(packageVersion: string): Promise<void> {
  const args = Helpers.getProgramArguments();

  if (args.options.v || args.options.version) {
    return Logger.log(packageVersion);
  }

  if (args.command === 'help' || args.options.help) {
    // only supported command right now but written in away to extend wouldnt be too
    // much restructing
    return Logger.log(Helpers.getHelpMessageByCommandType(CommandTypes.get));
  }

  switch (args.command) {
    case CommandTypes.get:
      return await commands.get.action(args);
    default:
      return Logger.error("unsupported command, try 'help'");
  }
}
