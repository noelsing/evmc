export interface HelpMessage {
  commands: string[];
  examples: string[];
  usage: string;
}

export const generateHelpMessages: HelpMessage = {
  commands: [],
  examples: [
    'ethereum-abi-types-generator <abiFileLocation>',
    'ethereum-abi-types-generator <abiFileLocation> --name=ABI_NAME',
    'ethereum-abi-types-generator <abiFileLocation> --name=ABI_NAME --prettierOptions={YOUR_PRETTIER_OPTIONS}',
    'ethereum-abi-types-generator <abiFileLocation> --watch',
    'ethereum-abi-types-generator <abiFileLocation> --name=ABI_NAME --watch',
    'ethereum-abi-types-generator <abiFileLocation> --name=ABI_NAME --prettierOptions={YOUR_PRETTIER_OPTIONS} --watch',
    'ethereum-abi-types-generator <abiFileLocation> --prettierOptions={YOUR_PRETTIER_OPTIONS}',
    'ethereum-abi-types-generator <abiFileLocation> --prettierOptions={YOUR_PRETTIER_OPTIONS} --watch',
    'ethereum-abi-types-generator <abiFileLocation> --output=PATH_DIRECTORY',
    'ethereum-abi-types-generator <abiFileLocation> --output=PATH_DIRECTORY --watch',
    'ethereum-abi-types-generator <abiFileLocation> --output=PATH_DIRECTORY --name=ABI_NAME',
    'ethereum-abi-types-generator <abiFileLocation> --output=PATH_DIRECTORY --name=ABI_NAME --watch',
    'ethereum-abi-types-generator <abiFileLocation> --output=PATH_DIRECTORY --prettierOptions={YOUR_PRETTIER_OPTIONS}',
    'ethereum-abi-types-generator <abiFileLocation> --output=PATH_DIRECTORY --prettierOptions={YOUR_PRETTIER_OPTIONS} --watch',
    'ethereum-abi-types-generator <abiFileLocation> --output=PATH_DIRECTORY --name=ABI_NAME --prettierOptions={YOUR_PRETTIER_OPTIONS}',
    'ethereum-abi-types-generator <abiFileLocation> --output=PATH_DIRECTORY --name=ABI_NAME --prettierOptions={YOUR_PRETTIER_OPTIONS} --watch',
    'ethereum-abi-types-generator <abiFileLocation> --provider=web3|ethers',
    'ethereum-abi-types-generator <abiFileLocation> --provider=web3|ethers --watch',
    'ethereum-abi-types-generator <abiFileLocation> --provider=web3|ethers --prettierOptions={YOUR_PRETTIER_OPTIONS}',
    'ethereum-abi-types-generator <abiFileLocation> --provider=web3|ethers --prettierOptions={YOUR_PRETTIER_OPTIONS} --watch',
    'ethereum-abi-types-generator <abiFileLocation> --name=ABI_NAME --provider=web3|ethers',
    'ethereum-abi-types-generator <abiFileLocation> --name=ABI_NAME --provider=web3|ethers --watch',
    'ethereum-abi-types-generator <abiFileLocation> --name=ABI_NAME --provider=web3|ethers --prettierOptions={YOUR_PRETTIER_OPTIONS}',
    'ethereum-abi-types-generator <abiFileLocation> --name=ABI_NAME --provider=web3|ethers --prettierOptions={YOUR_PRETTIER_OPTIONS} --watch',
    'ethereum-abi-types-generator <abiFileLocation> --output=PATH_DIRECTORY --provider=web3|ethers',
    'ethereum-abi-types-generator <abiFileLocation> --output=PATH_DIRECTORY --provider=web3|ethers --watch',
    'ethereum-abi-types-generator <abiFileLocation> --output=PATH_DIRECTORY --provider=web3|ethers --prettierOptions={YOUR_PRETTIER_OPTIONS}',
    'ethereum-abi-types-generator <abiFileLocation> --output=PATH_DIRECTORY --provider=web3|ethers --prettierOptions={YOUR_PRETTIER_OPTIONS} --watch',
    'ethereum-abi-types-generator <abiFileLocation> --output=PATH_DIRECTORY --name=ABI_NAME --provider=web3|ethers',
    'ethereum-abi-types-generator <abiFileLocation> --output=PATH_DIRECTORY --name=ABI_NAME --provider=web3|ethers --watch',
    'ethereum-abi-types-generator <abiFileLocation> --output=PATH_DIRECTORY --name=ABI_NAME --provider=web3|ethers --prettierOptions={YOUR_PRETTIER_OPTIONS}',
    'ethereum-abi-types-generator <abiFileLocation> --output=PATH_DIRECTORY --name=ABI_NAME --provider=web3|ethers --prettierOptions={YOUR_PRETTIER_OPTIONS} --watch',
  ],
  usage: 'ethereum-abi-types-generator <abiFileLocation>',
};
