(function() {
    'use strict';

    angular
        .module('scrEditor', ['ngMaterial']);

    angular
        .module('scrEditor')
        .controller('EditorController', EditorController);


    function EditorController() {

        this.scrExport = [['2.1 Conventions','The%20key%20words%20MUST%2C%20MUST%20NOT%2C%20REQUIRED%2C%20SHALL%2C%20SHALL%20NOT%2C%20SHOULD%2C%20SHOULD%20NOT%2C%20RECOMMENDED%2C%20MAY%2C%20and%20OPTIONAL%20in%20this%20document%20are%20to%20be%20interpreted%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20as%20described%20in%20%5BRFC2119%5D.%20All%20sections%20and%20appendixes%2C%20except%20%22Scope%22%20and%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Introduction%22%2C%20are%20normative%2C%20unless%20they%20are%20explicitly%20indicated%20to%20be%20informative.'],
['2.1 Conventions','The%20key%20words%20MUST%2C%20MUST%20NOT%2C%20REQUIRED%2C%20SHALL%2C%20SHALL%20NOT%2C%20SHOULD%2C%20SHOULD%20NOT%2C%20RECOMMENDED%2C%20MAY%2C%20and%20OPTIONAL%20in%20this%20document%20are%20to%20be%20interpreted%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20as%20described%20in%20%5BRFC2119%5D.%20All%20sections%20and%20appendixes%2C%20except%20%22Scope%22%20and%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Introduction%22%2C%20are%20normative%2C%20unless%20they%20are%20explicitly%20indicated%20to%20be%20informative.'],
['2.1 Conventions','The%20key%20words%20MUST%2C%20MUST%20NOT%2C%20REQUIRED%2C%20SHALL%2C%20SHALL%20NOT%2C%20SHOULD%2C%20SHOULD%20NOT%2C%20RECOMMENDED%2C%20MAY%2C%20and%20OPTIONAL%20in%20this%20document%20are%20to%20be%20interpreted%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20as%20described%20in%20%5BRFC2119%5D.%20All%20sections%20and%20appendixes%2C%20except%20%22Scope%22%20and%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Introduction%22%2C%20are%20normative%2C%20unless%20they%20are%20explicitly%20indicated%20to%20be%20informative.'],
['2.1 Conventions','The%20key%20words%20MUST%2C%20MUST%20NOT%2C%20REQUIRED%2C%20SHALL%2C%20SHALL%20NOT%2C%20SHOULD%2C%20SHOULD%20NOT%2C%20RECOMMENDED%2C%20MAY%2C%20and%20OPTIONAL%20in%20this%20document%20are%20to%20be%20interpreted%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20as%20described%20in%20%5BRFC2119%5D.%20All%20sections%20and%20appendixes%2C%20except%20%22Scope%22%20and%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Introduction%22%2C%20are%20normative%2C%20unless%20they%20are%20explicitly%20indicated%20to%20be%20informative.'],
                          ['11.1 Common Paragraph','This%20MUST%20be%20implement']];
        this.scrEdited = {
            "client": {
                "title": "SCR for LWM2M Client",
                "key": "LWM2M",
                "sections": [
                    {
                        "key": "CR",
                        "name": "Client Registration",
                        "rows": [
                            {
                                "function": "Support of server initiated bootstrap",
                                "reference": "Section 5.2.1",
                                requirement: "sdfkljdf "
                            },{
                                "function": "Support of server initiated bootstrap",
                                "reference": "Section 5.2.1",
                                requirement: ""
                            },{
                                "function": "Support of server initiated bootstrap",
                                "reference": "Section 5.2.1",
                                requirement: ""
                            },{
                                "function": "Support of server initiated bootstrap",
                                "reference": "Section 5.2.1",
                                requirement: "dslkfjsdk"
                            },{
                                "function": "Support of server initiated bootstrap",
                                "reference": "Section 5.2.1",
                                requirement: ""
                            }
                        ]
                    }
                ]
            },
            "server": {
                "title": "SCR for LWM2M Server",
                "key": "LWM2M",
                "sections": [
                    {
                        "key": "CR",
                        "name": "Client Registration",
                        "rows": [
                            {
                                "function": "Support of server initiated bootstrap",
                                "reference": "Section 5.2.1",
                                requirement: ""
                            },{
                                "function": "Support of server initiated bootstrap",
                                "reference": "Section 5.2.1",
                                requirement: "dsfklj"
                            },{
                                "function": "Support of server initiated bootstrap",
                                "reference": "Section 5.2.1",
                                requirement: ""
                            },{
                                "function": "Support of server initiated bootstrap",
                                "reference": "Section 5.2.1",
                                requirement: "dslkfj dsf"
                            },{
                                "function": "Support of server initiated bootstrap",
                                "reference": "Section 5.2.1",
                                requirement: ""
                            }
                        ]
                    }
                ]
            }
        };


        this.decode = function(content) {
            return decodeURIComponent(content);
        };

        this.clearKeyword = function(index) {
            delete this.scrExport[index];
        };
        
    };

})();
