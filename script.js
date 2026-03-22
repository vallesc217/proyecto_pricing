let table = new DataTable('#myTable', {
    ajax: {
        url: 'export.json',
        dataSrc: function (data) {
            return data
        }
    },
    columns:[
        {data: 'Pais'},
        {data: 'Perfil'},        
        {data: 'Seniority'},
        {data: 'USD'}
    ]

})