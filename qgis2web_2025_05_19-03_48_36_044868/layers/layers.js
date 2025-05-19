var wms_layers = [];

var format_WORLDshapeWORLD_regionshp_0 = new ol.format.GeoJSON();
var features_WORLDshapeWORLD_regionshp_0 = format_WORLDshapeWORLD_regionshp_0.readFeatures(json_WORLDshapeWORLD_regionshp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WORLDshapeWORLD_regionshp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WORLDshapeWORLD_regionshp_0.addFeatures(features_WORLDshapeWORLD_regionshp_0);
var lyr_WORLDshapeWORLD_regionshp_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WORLDshapeWORLD_regionshp_0, 
                style: style_WORLDshapeWORLD_regionshp_0,
                popuplayertitle: 'WORLD shape/WORLD_region.shp',
                interactive: false,
                title: '<img src="styles/legend/WORLDshapeWORLD_regionshp_0.png" /> WORLD shape/WORLD_region.shp'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Страна',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Страна'
            });

lyr_WORLDshapeWORLD_regionshp_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_WORLDshapeWORLD_regionshp_0,lyr__1];
lyr_WORLDshapeWORLD_regionshp_0.set('fieldAliases', {'Country': 'Country', 'Capital': 'Capital', 'Continent': 'Continent', 'Numeric_co': 'Numeric_co', 'ISO': 'ISO', 'Pop_1994': 'Pop_1994', 'Pop_Grw_Rt': 'Pop_Grw_Rt', 'Pop_Male': 'Pop_Male', 'Pop_Fem': 'Pop_Fem', 'Pop_0_14': 'Pop_0_14', 'Pop_15_64': 'Pop_15_64', 'Pop_65Plus': 'Pop_65Plus', 'Male_0_14': 'Male_0_14', 'Male_15_64': 'Male_15_64', 'Male_65Plu': 'Male_65Plu', 'Fem_0_14': 'Fem_0_14', 'Fem_15_64': 'Fem_15_64', 'Fem_65Plus': 'Fem_65Plus', 'Pop_Urban': 'Pop_Urban', 'Pop_Rural': 'Pop_Rural', 'Pop_Urb_Ma': 'Pop_Urb_Ma', 'Pop_Urb_Fe': 'Pop_Urb_Fe', 'Pop_Rur_Ma': 'Pop_Rur_Ma', 'Pop_Rur_Fe': 'Pop_Rur_Fe', 'Arable_Pct': 'Arable_Pct', 'Literacy': 'Literacy', 'Inflat_Rat': 'Inflat_Rat', 'Unempl_Rat': 'Unempl_Rat', 'Indust_Gro': 'Indust_Gro', });
lyr__1.set('fieldAliases', {'fid': 'fid', 'Country': 'Country', 'Характерист': 'Характерист', 'Название страны': 'Название страны', });
lyr_WORLDshapeWORLD_regionshp_0.set('fieldImages', {'Country': '', 'Capital': '', 'Continent': '', 'Numeric_co': '', 'ISO': '', 'Pop_1994': '', 'Pop_Grw_Rt': '', 'Pop_Male': '', 'Pop_Fem': '', 'Pop_0_14': '', 'Pop_15_64': '', 'Pop_65Plus': '', 'Male_0_14': '', 'Male_15_64': '', 'Male_65Plu': '', 'Fem_0_14': '', 'Fem_15_64': '', 'Fem_65Plus': '', 'Pop_Urban': '', 'Pop_Rural': '', 'Pop_Urb_Ma': '', 'Pop_Urb_Fe': '', 'Pop_Rur_Ma': '', 'Pop_Rur_Fe': '', 'Arable_Pct': '', 'Literacy': '', 'Inflat_Rat': '', 'Unempl_Rat': '', 'Indust_Gro': '', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'Country': 'TextEdit', 'Характерист': 'TextEdit', 'Название страны': 'TextEdit', });
lyr_WORLDshapeWORLD_regionshp_0.set('fieldLabels', {'Country': 'no label', 'Capital': 'no label', 'Continent': 'no label', 'Numeric_co': 'no label', 'ISO': 'no label', 'Pop_1994': 'no label', 'Pop_Grw_Rt': 'no label', 'Pop_Male': 'no label', 'Pop_Fem': 'no label', 'Pop_0_14': 'no label', 'Pop_15_64': 'no label', 'Pop_65Plus': 'no label', 'Male_0_14': 'no label', 'Male_15_64': 'no label', 'Male_65Plu': 'no label', 'Fem_0_14': 'no label', 'Fem_15_64': 'no label', 'Fem_65Plus': 'no label', 'Pop_Urban': 'no label', 'Pop_Rural': 'no label', 'Pop_Urb_Ma': 'no label', 'Pop_Urb_Fe': 'no label', 'Pop_Rur_Ma': 'no label', 'Pop_Rur_Fe': 'no label', 'Arable_Pct': 'no label', 'Literacy': 'no label', 'Inflat_Rat': 'no label', 'Unempl_Rat': 'no label', 'Indust_Gro': 'no label', });
lyr__1.set('fieldLabels', {'fid': 'hidden field', 'Country': 'no label', 'Характерист': 'no label', 'Название страны': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});