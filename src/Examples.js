export const table = [{
    tableID: 0,
    tableName: `TestTable`,
    columns: [
      {
      columnName: `ID`,
      type: `integer`
      },
      {
        columnName: `String`,
        type: `string`
      },
      {
        columnName: `Integer`,
        type: `integer`
      },
      {
        columnName: `Real`,
        type: `real`
      },
      {
        columnName: `Date`,
        type: `date`
      }
    ],
    rows: [
      {
        ID: 1,
        String: 'thing',
        Integer: '',
        Real: 4.37,
        Date: '12/10/20'
      },
      {
        ID: 2,
        String: 'doodad',
        Integer: 7,
        Real: 5.37,
        Date: '12/11/20'
      }
    ]
}]