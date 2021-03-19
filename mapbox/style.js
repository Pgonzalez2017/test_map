
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "topografia_0": {
            "type": "raster",
            "tiles": ["http://services.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}"],
            "tileSize": 256
        },
        "yugoslavia_1": {
            "type": "geojson",
            "data": json_yugoslavia_1
        }
                    ,
        "Yemen_sur_2": {
            "type": "geojson",
            "data": json_Yemen_sur_2
        }
                    ,
        "URSS_bering_3": {
            "type": "geojson",
            "data": json_URSS_bering_3
        }
                    ,
        "URSS_02_4": {
            "type": "geojson",
            "data": json_URSS_02_4
        }
                    ,
        "RFA_5": {
            "type": "geojson",
            "data": json_RFA_5
        }
                    ,
        "RDA_6": {
            "type": "geojson",
            "data": json_RDA_6
        }
                    ,
        "Checoslovaquia_7": {
            "type": "geojson",
            "data": json_Checoslovaquia_7
        }
                    ,
        "1_8": {
            "type": "geojson",
            "data": json_1_8
        }
                    ,
        "2_9": {
            "type": "geojson",
            "data": json_2_9
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_topografia_0_0",
            "type": "raster",
            "source": "topografia_0"
        },
        {
            "id": "lyr_yugoslavia_1_0",
            "type": "fill",
            "source": "yugoslavia_1",
            "layout": {},
            "paint": {'fill-opacity': 0.2, 'fill-color': '#ff0004'}
        }
,
        {
            "id": "lyr_Yemen_sur_2_0",
            "type": "fill",
            "source": "Yemen_sur_2",
            "layout": {},
            "paint": {'fill-opacity': 0.2, 'fill-color': '#ff0004'}
        }
,
        {
            "id": "lyr_URSS_bering_3_0",
            "type": "fill",
            "source": "URSS_bering_3",
            "layout": {},
            "paint": {'fill-opacity': 0.2, 'fill-color': '#ff0004'}
        }
,
        {
            "id": "lyr_URSS_02_4_0",
            "type": "fill",
            "source": "URSS_02_4",
            "layout": {},
            "paint": {'fill-opacity': 0.2, 'fill-color': '#ff0004'}
        }
,
        {
            "id": "lyr_RFA_5_0",
            "type": "fill",
            "source": "RFA_5",
            "layout": {},
            "paint": {'fill-opacity': 0.2, 'fill-color': '#ff0004'}
        }
,
        {
            "id": "lyr_RDA_6_0",
            "type": "fill",
            "source": "RDA_6",
            "layout": {},
            "paint": {'fill-opacity': 0.2, 'fill-color': '#ff0004'}
        }
,
        {
            "id": "lyr_Checoslovaquia_7_0",
            "type": "fill",
            "source": "Checoslovaquia_7",
            "layout": {},
            "paint": {'fill-opacity': 0.2, 'fill-color': '#ff0004'}
        }
,
        {
            "id": "lyr_1_8_0",
            "type": "line",
            "source": "1_8",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#e15989'}
        }
,
        {
            "id": "lyr_2_9_0",
            "type": "fill",
            "source": "2_9",
            "layout": {},
            "paint": {'fill-opacity': 0.5720000000000001, 'fill-color': '#f2fabd'}
        }
],
}