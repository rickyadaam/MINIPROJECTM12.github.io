var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KotaJogja_1 = new ol.format.GeoJSON();
var features_KotaJogja_1 = format_KotaJogja_1.readFeatures(json_KotaJogja_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaJogja_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaJogja_1.addFeatures(features_KotaJogja_1);
var lyr_KotaJogja_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaJogja_1, 
                style: style_KotaJogja_1,
                popuplayertitle: "Kota Jogja",
                interactive: true,
                title: '<img src="styles/legend/KotaJogja_1.png" /> Kota Jogja'
            });
var format_KLASIFIKASIJANGKAUAN_2 = new ol.format.GeoJSON();
var features_KLASIFIKASIJANGKAUAN_2 = format_KLASIFIKASIJANGKAUAN_2.readFeatures(json_KLASIFIKASIJANGKAUAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KLASIFIKASIJANGKAUAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KLASIFIKASIJANGKAUAN_2.addFeatures(features_KLASIFIKASIJANGKAUAN_2);
var lyr_KLASIFIKASIJANGKAUAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KLASIFIKASIJANGKAUAN_2, 
                style: style_KLASIFIKASIJANGKAUAN_2,
                popuplayertitle: "KLASIFIKASI JANGKAUAN",
                interactive: false,
    title: 'KLASIFIKASI JANGKAUAN<br />\
    <img src="styles/legend/KLASIFIKASIJANGKAUAN_2_0.png" /> 400<br />\
    <img src="styles/legend/KLASIFIKASIJANGKAUAN_2_1.png" /> 800<br />\
    <img src="styles/legend/KLASIFIKASIJANGKAUAN_2_2.png" /> 1200<br />'
        });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_3.png" /> Jalan'
            });
var format_Penginapan_4 = new ol.format.GeoJSON();
var features_Penginapan_4 = format_Penginapan_4.readFeatures(json_Penginapan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penginapan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penginapan_4.addFeatures(features_Penginapan_4);
var lyr_Penginapan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Penginapan_4, 
                style: style_Penginapan_4,
                popuplayertitle: "Penginapan ",
                interactive: true,
                title: '<img src="styles/legend/Penginapan_4.png" /> Penginapan '
            });
var format_OlehOlehKhasJogja_5 = new ol.format.GeoJSON();
var features_OlehOlehKhasJogja_5 = format_OlehOlehKhasJogja_5.readFeatures(json_OlehOlehKhasJogja_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OlehOlehKhasJogja_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OlehOlehKhasJogja_5.addFeatures(features_OlehOlehKhasJogja_5);
var lyr_OlehOlehKhasJogja_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OlehOlehKhasJogja_5, 
                style: style_OlehOlehKhasJogja_5,
                popuplayertitle: "Oleh Oleh Khas Jogja",
                interactive: true,
                title: '<img src="styles/legend/OlehOlehKhasJogja_5.png" /> Oleh Oleh Khas Jogja'
            });
var format_RelKAI_6 = new ol.format.GeoJSON();
var features_RelKAI_6 = format_RelKAI_6.readFeatures(json_RelKAI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RelKAI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RelKAI_6.addFeatures(features_RelKAI_6);
var lyr_RelKAI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RelKAI_6, 
                style: style_RelKAI_6,
                popuplayertitle: "Rel KAI",
                interactive: true,
                title: '<img src="styles/legend/RelKAI_6.png" /> Rel KAI'
            });
var format_Stasiun_7 = new ol.format.GeoJSON();
var features_Stasiun_7 = format_Stasiun_7.readFeatures(json_Stasiun_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stasiun_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stasiun_7.addFeatures(features_Stasiun_7);
var lyr_Stasiun_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stasiun_7, 
                style: style_Stasiun_7,
                popuplayertitle: "Stasiun",
                interactive: true,
                title: '<img src="styles/legend/Stasiun_7.png" /> Stasiun'
            });

lyr_OSMStandard_0.setVisible(true);lyr_KotaJogja_1.setVisible(true);lyr_KLASIFIKASIJANGKAUAN_2.setVisible(true);lyr_Jalan_3.setVisible(true);lyr_Penginapan_4.setVisible(true);lyr_OlehOlehKhasJogja_5.setVisible(true);lyr_RelKAI_6.setVisible(true);lyr_Stasiun_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KotaJogja_1,lyr_KLASIFIKASIJANGKAUAN_2,lyr_Jalan_3,lyr_Penginapan_4,lyr_OlehOlehKhasJogja_5,lyr_RelKAI_6,lyr_Stasiun_7];
lyr_KotaJogja_1.set('fieldAliases', {'kelurahan': 'kelurahan', 'kecamatan': 'kecamatan', 'kode': 'kode', 'luas_ha': 'luas_ha', 'luas_km2': 'luas_km2', });
lyr_KLASIFIKASIJANGKAUAN_2.set('fieldAliases', {'Nama': 'Nama', 'Nama_2': 'Nama_2', 'Nama_3': 'Nama_3', });
lyr_Jalan_3.set('fieldAliases', {'klas_jalan': 'klas_jalan', 'nama_jalan': 'nama_jalan', 'panjang': 'panjang', });
lyr_Penginapan_4.set('fieldAliases', {'Nama': 'Nama', });
lyr_OlehOlehKhasJogja_5.set('fieldAliases', {'NAMA': 'NAMA', });
lyr_RelKAI_6.set('fieldAliases', {'FCODE': 'FCODE', 'TIPREL': 'TIPREL', 'JMLREL': 'JMLREL', 'KMXREL': 'KMXREL', 'KLSREL': 'KLSREL', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Stasiun_7.set('fieldAliases', {'Nama': 'Nama', });
lyr_KotaJogja_1.set('fieldImages', {'kelurahan': '', 'kecamatan': '', 'kode': '', 'luas_ha': '', 'luas_km2': '', });
lyr_KLASIFIKASIJANGKAUAN_2.set('fieldImages', {'Nama': 'TextEdit', 'Nama_2': 'TextEdit', 'Nama_3': 'TextEdit', });
lyr_Jalan_3.set('fieldImages', {'klas_jalan': '', 'nama_jalan': '', 'panjang': '', });
lyr_Penginapan_4.set('fieldImages', {'Nama': 'TextEdit', });
lyr_OlehOlehKhasJogja_5.set('fieldImages', {'NAMA': 'TextEdit', });
lyr_RelKAI_6.set('fieldImages', {'FCODE': 'TextEdit', 'TIPREL': 'TextEdit', 'JMLREL': 'TextEdit', 'KMXREL': 'TextEdit', 'KLSREL': 'TextEdit', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Stasiun_7.set('fieldImages', {'Nama': 'TextEdit', });
lyr_KotaJogja_1.set('fieldLabels', {'kelurahan': 'no label', 'kecamatan': 'no label', 'kode': 'no label', 'luas_ha': 'no label', 'luas_km2': 'no label', });
lyr_KLASIFIKASIJANGKAUAN_2.set('fieldLabels', {'Nama': 'no label', 'Nama_2': 'no label', 'Nama_3': 'no label', });
lyr_Jalan_3.set('fieldLabels', {'klas_jalan': 'no label', 'nama_jalan': 'no label', 'panjang': 'no label', });
lyr_Penginapan_4.set('fieldLabels', {'Nama': 'no label', });
lyr_OlehOlehKhasJogja_5.set('fieldLabels', {'NAMA': 'no label', });
lyr_RelKAI_6.set('fieldLabels', {'FCODE': 'no label', 'TIPREL': 'no label', 'JMLREL': 'no label', 'KMXREL': 'no label', 'KLSREL': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Stasiun_7.set('fieldLabels', {'Nama': 'no label', });
lyr_Stasiun_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});