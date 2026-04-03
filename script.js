let table = new DataTable('#myTable', {
    ajax: {
        url: 'export.json',
        dataSrc: function (data) {
            return data
        }
    },
    columns:[
        {data: 'Pais'},
        {data: 'Partner'},
        {data: 'Perfil'},        
        {data: 'Seniority'},
        {data: 'Fecha de Actualizacion'},
        {data: 'Costo Empresa'}
    ]

})
