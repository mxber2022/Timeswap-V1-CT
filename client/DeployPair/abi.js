module.exports = {
  abi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
        {
          internalType: 'uint16',
          name: '_fee',
          type: 'uint16',
        },
        {
          internalType: 'uint16',
          name: '_protocolFee',
          type: 'uint16',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'AcceptOwner',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'contract IERC20',
          name: 'asset',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'contract IERC20',
          name: 'collateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract IPair',
          name: 'pair',
          type: 'address',
        },
      ],
      name: 'CreatePair',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'pendingOwner',
          type: 'address',
        },
      ],
      name: 'SetOwner',
      type: 'event',
    },
    {
      inputs: [],
      name: 'acceptOwner',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IERC20',
          name: 'asset',
          type: 'address',
        },
        {
          internalType: 'contract IERC20',
          name: 'collateral',
          type: 'address',
        },
      ],
      name: 'createPair',
      outputs: [
        {
          internalType: 'contract IPair',
          name: 'pair',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'fee',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IERC20',
          name: '',
          type: 'address',
        },
        {
          internalType: 'contract IERC20',
          name: '',
          type: 'address',
        },
      ],
      name: 'getPair',
      outputs: [
        {
          internalType: 'contract IPair',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pendingOwner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'protocolFee',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_pendingOwner',
          type: 'address',
        },
      ],
      name: 'setPendingOwner',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
}
