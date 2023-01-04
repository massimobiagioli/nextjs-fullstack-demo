export const schema = {
  models: {
    Device: {
      name: 'Device',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        name: {
          name: 'name',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        address: {
          name: 'address',
          isArray: false,
          type: 'AWSIPAddress',
          isRequired: true,
          attributes: [],
        },
        owner: {
          name: 'owner',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        isActive: {
          name: 'isActive',
          isArray: false,
          type: 'Boolean',
          isRequired: false,
          attributes: [],
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: 'Devices',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                provider: 'userPools',
                ownerField: 'owner',
                allow: 'owner',
                operations: ['create', 'update', 'delete', 'read'],
                identityClaim: 'cognito:username',
              },
            ],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {},
  codegenVersion: '3.3.2',
  version: '432f9b0a8870f8e6f059e6dc61d57546',
}
