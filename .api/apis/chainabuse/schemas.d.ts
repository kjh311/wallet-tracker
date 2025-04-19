declare const CheckSanctionedAddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["address"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly items: {
                readonly properties: {
                    readonly label: {
                        readonly type: "string";
                        readonly examples: readonly ["Multinational Hacker"];
                    };
                    readonly chain: {
                        readonly type: "string";
                        readonly examples: readonly ["BTC"];
                    };
                    readonly address: {
                        readonly type: "string";
                        readonly examples: readonly ["12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y"];
                    };
                };
                readonly required: readonly ["chain", "address"];
                readonly type: "object";
            };
            readonly type: "array";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly reason: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["reason"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateReports: {
    readonly body: {
        readonly items: {
            readonly properties: {
                readonly accusedScammers: {
                    readonly items: {
                        readonly properties: {
                            readonly info: {
                                readonly items: {
                                    readonly properties: {
                                        readonly type: {
                                            readonly enum: readonly ["NAME", "EMAIL", "PHONE", "DISCORD", "TELEGRAM", "TWITTER", "INSTAGRAM", "GITHUB", "FACEBOOK", "WHATSAPP", "TIKTOK", "YOUTUBE", "OTHER"];
                                            readonly type: "string";
                                            readonly examples: readonly ["NAME"];
                                        };
                                        readonly contact: {
                                            readonly type: "string";
                                            readonly examples: readonly ["BTC player"];
                                        };
                                    };
                                    readonly required: readonly ["type", "contact"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                        };
                        readonly required: readonly ["info"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly addresses: {
                    readonly items: {
                        readonly anyOf: readonly [{
                            readonly properties: {
                                readonly label: {
                                    readonly type: "string";
                                };
                                readonly chain: {
                                    readonly enum: readonly ["BTC", "ETH", "TRON", "SOL", "POLYGON", "BINANCE", "HBAR", "CARDANO", "LITECOIN", "AVALANCHE", "MULTIVERSX", "ARBITRUM", "ALGORAND", "BASE", "TON"];
                                    readonly type: "string";
                                };
                                readonly domain: {
                                    readonly type: "string";
                                };
                                readonly address: {
                                    readonly type: "string";
                                };
                            };
                            readonly required: readonly ["chain", "address"];
                            readonly type: "object";
                        }, {
                            readonly properties: {
                                readonly label: {
                                    readonly type: "string";
                                };
                                readonly chain: {
                                    readonly enum: readonly ["BTC", "ETH", "TRON", "SOL", "POLYGON", "BINANCE", "HBAR", "CARDANO", "LITECOIN", "AVALANCHE", "MULTIVERSX", "ARBITRUM", "ALGORAND", "BASE", "TON"];
                                    readonly type: "string";
                                };
                                readonly domain: {
                                    readonly type: "string";
                                };
                                readonly address: {
                                    readonly type: "string";
                                };
                            };
                            readonly required: readonly ["domain"];
                            readonly type: "object";
                        }];
                    };
                    readonly type: "array";
                    readonly description: "List of addresses and/or domains.";
                };
                readonly tokens: {
                    readonly items: {
                        readonly properties: {
                            readonly tokenId: {
                                readonly type: "string";
                                readonly examples: readonly ["120"];
                            };
                        };
                        readonly required: readonly ["tokenId"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly type: "array";
                    readonly description: "List of fraudulent NFT tokens";
                };
                readonly transactionHashes: {
                    readonly items: {
                        readonly properties: {
                            readonly hash: {
                                readonly type: "string";
                            };
                            readonly chain: {
                                readonly enum: readonly ["BTC", "ETH", "TRON", "SOL", "POLYGON", "BINANCE", "HBAR", "CARDANO", "LITECOIN", "AVALANCHE", "MULTIVERSX", "ARBITRUM", "ALGORAND", "BASE", "TON"];
                                readonly type: "string";
                                readonly examples: readonly ["ETH"];
                            };
                            readonly label: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["hash", "chain"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly type: "array";
                    readonly description: "List of fraudulent transaction hashes";
                };
                readonly agreedToBeContactedData: {
                    readonly properties: {
                        readonly agreed: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                        readonly agreedToBeContactedByLawEnforcement: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["John Doe"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly examples: readonly ["john_doe@example.com"];
                        };
                        readonly phoneNumber: {
                            readonly type: "string";
                            readonly examples: readonly ["123456789"];
                        };
                        readonly whereDidYouHear: {
                            readonly type: "string";
                            readonly examples: readonly ["I heard about chainabuse from twitter."];
                        };
                        readonly cityAndState: {
                            readonly type: "string";
                            readonly examples: readonly ["San Francisco, CA"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly examples: readonly ["US"];
                        };
                        readonly countryCode: {
                            readonly type: "string";
                        };
                        readonly state: {
                            readonly type: "string";
                        };
                        readonly stateCode: {
                            readonly type: "string";
                        };
                        readonly city: {
                            readonly type: "string";
                        };
                        readonly zipCode: {
                            readonly type: "string";
                        };
                        readonly krollGroupActionOptIn: {
                            readonly type: "boolean";
                        };
                        readonly krollRequestInvestigativeSupport: {
                            readonly type: "boolean";
                        };
                    };
                    readonly required: readonly ["agreed"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly categoryDescription: {
                    readonly type: "string";
                };
                readonly compromiseIndicators: {
                    readonly items: {
                        readonly properties: {
                            readonly value: {
                                readonly type: "string";
                                readonly examples: readonly ["192.168.1.1"];
                            };
                            readonly type: {
                                readonly enum: readonly ["FILE", "HASH", "IP", "CATEGORY", "VARIANT"];
                                readonly type: "string";
                                readonly examples: readonly ["IP"];
                            };
                        };
                        readonly required: readonly ["value", "type"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["Project rug pulled me"];
                };
                readonly evidences: {
                    readonly items: {
                        readonly properties: {
                            readonly source: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["source"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly losses: {
                    readonly items: {
                        readonly properties: {
                            readonly asset: {
                                readonly type: "string";
                                readonly examples: readonly ["USD"];
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly examples: readonly [50];
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                        };
                        readonly required: readonly ["asset", "amount"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                    readonly description: "Optional. List of lost assets and their amounts.";
                };
                readonly scamCategory: {
                    readonly enum: readonly ["RUG_PULL", "UKRANIAN_DONATION_SCAM", "DONATION_SCAM", "SEXTORTION", "SIM_SWAP", "PHISHING", "RANSOMWARE", "CONTRACT_EXPLOIT", "AIRDROP", "ROMANCE", "PIGBUTCHERING", "OTHER", "FAKE_PROJECT", "OTHER_BLACKMAIL", "IMPERSONATION", "FAKE_RETURNS", "UPGRADE_SCAM", "MAN_IN_THE_MIDDLE_ATTACK", "OTHER_HACK", "OTHER_INVESTMENT_SCAM"];
                    readonly type: "string";
                    readonly examples: readonly ["RUG_PULL"];
                };
            };
            readonly required: readonly ["addresses", "description", "scamCategory"];
            readonly type: "object";
            readonly additionalProperties: false;
        };
        readonly type: "array";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly failedReports: {
                    readonly items: {
                        readonly properties: {
                            readonly error: {
                                readonly items: {
                                    readonly properties: {
                                        readonly reason: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly required: readonly ["reason"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly reportIndex: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                        };
                        readonly required: readonly ["error", "reportIndex"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly createdReports: {
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["id"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
            };
            readonly required: readonly ["failedReports", "createdReports"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly reason: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["reason"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly reason: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["reason"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Report: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly reportId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Id of the report";
                };
            };
            readonly required: readonly ["reportId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly evidences: {
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly type: "array";
                };
                readonly ips: {
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly type: "array";
                };
                readonly losses: {
                    readonly items: {
                        readonly properties: {
                            readonly amount: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly asset: {
                                readonly type: "string";
                                readonly enum: readonly ["OTHER", "BTC", "ETH", "TRON", "SOL", "POLYGON", "BINANCE", "HBAR", "CARDANO", "LITECOIN", "AVALANCHE", "MULTIVERSX", "ARBITRUM", "ALGORAND", "BASE", "TON", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UYW", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"];
                                readonly description: "`OTHER` `BTC` `ETH` `TRON` `SOL` `POLYGON` `BINANCE` `HBAR` `CARDANO` `LITECOIN` `AVALANCHE` `MULTIVERSX` `ARBITRUM` `ALGORAND` `BASE` `TON` `AED` `AFN` `ALL` `AMD` `ANG` `AOA` `ARS` `AUD` `AWG` `AZN` `BAM` `BBD` `BDT` `BGN` `BHD` `BIF` `BMD` `BND` `BOB` `BOV` `BRL` `BSD` `BTN` `BWP` `BYN` `BZD` `CAD` `CDF` `CHE` `CHF` `CHW` `CLF` `CLP` `CNY` `COP` `COU` `CRC` `CUC` `CUP` `CVE` `CZK` `DJF` `DKK` `DOP` `DZD` `EGP` `ERN` `ETB` `EUR` `FJD` `FKP` `GBP` `GEL` `GHS` `GIP` `GMD` `GNF` `GTQ` `GYD` `HKD` `HNL` `HRK` `HTG` `HUF` `IDR` `ILS` `INR` `IQD` `IRR` `ISK` `JMD` `JOD` `JPY` `KES` `KGS` `KHR` `KMF` `KPW` `KRW` `KWD` `KYD` `KZT` `LAK` `LBP` `LKR` `LRD` `LSL` `LYD` `MAD` `MDL` `MGA` `MKD` `MMK` `MNT` `MOP` `MRU` `MUR` `MVR` `MWK` `MXN` `MXV` `MYR` `MZN` `NAD` `NGN` `NIO` `NOK` `NPR` `NZD` `OMR` `PAB` `PEN` `PGK` `PHP` `PKR` `PLN` `PYG` `QAR` `RON` `RSD` `RUB` `RWF` `SAR` `SBD` `SCR` `SDG` `SEK` `SGD` `SHP` `SLL` `SOS` `SRD` `SSP` `STN` `SVC` `SYP` `SZL` `THB` `TJS` `TMT` `TND` `TOP` `TRY` `TTD` `TWD` `TZS` `UAH` `UGX` `USD` `USN` `UYI` `UYU` `UYW` `UZS` `VES` `VND` `VUV` `WST` `XAF` `XAG` `XAU` `XBA` `XBB` `XBC` `XBD` `XCD` `XDR` `XOF` `XPD` `XPF` `XPT` `XSU` `XTS` `XUA` `XXX` `YER` `ZAR` `ZMW` `ZWL`";
                            };
                        };
                        readonly required: readonly ["amount", "asset"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly accusedScammers: {
                    readonly items: {
                        readonly properties: {
                            readonly info: {
                                readonly items: {
                                    readonly properties: {
                                        readonly type: {
                                            readonly enum: readonly ["NAME", "EMAIL", "PHONE", "DISCORD", "TELEGRAM", "TWITTER", "INSTAGRAM", "GITHUB", "FACEBOOK", "WHATSAPP", "TIKTOK", "YOUTUBE", "OTHER"];
                                            readonly type: "string";
                                            readonly description: "`NAME` `EMAIL` `PHONE` `DISCORD` `TELEGRAM` `TWITTER` `INSTAGRAM` `GITHUB` `FACEBOOK` `WHATSAPP` `TIKTOK` `YOUTUBE` `OTHER`";
                                        };
                                        readonly contact: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly required: readonly ["type", "contact"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                        };
                        readonly required: readonly ["info"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly descriptionMarkdown: {
                    readonly type: "string";
                };
                readonly addresses: {
                    readonly items: {
                        readonly properties: {
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly chain: {
                                readonly type: "string";
                                readonly examples: readonly ["BTC"];
                            };
                            readonly address: {
                                readonly type: "string";
                                readonly examples: readonly ["12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y"];
                            };
                        };
                        readonly required: readonly ["domain", "address"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2022-09-09T04:53:16.591Z"];
                };
                readonly scamCategory: {
                    readonly type: "string";
                    readonly examples: readonly ["RUG_PULL"];
                };
                readonly isPrivate: {
                    readonly type: "boolean";
                };
                readonly checked: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly trusted: {
                    readonly type: "boolean";
                    readonly description: "Reported by a contributor registered as trusted on Chainabuse.";
                    readonly examples: readonly [true];
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "Report ID";
                    readonly examples: readonly ["52907745-7672-470e-a803-a2f8feb52944"];
                };
            };
            readonly required: readonly ["addresses", "createdAt", "trusted", "id"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly reason: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["reason"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Reports: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "(Optional if a domain is passed). Crypto addresses to screen.";
                };
                readonly before: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional. Threshold date to use as a filter.";
                };
                readonly category: {
                    readonly enum: readonly ["RUG_PULL", "UKRANIAN_DONATION_SCAM", "DONATION_SCAM", "SEXTORTION", "SIM_SWAP", "PHISHING", "RANSOMWARE", "CONTRACT_EXPLOIT", "AIRDROP", "ROMANCE", "PIGBUTCHERING", "OTHER", "FAKE_PROJECT", "OTHER_BLACKMAIL", "IMPERSONATION", "FAKE_RETURNS", "UPGRADE_SCAM", "MAN_IN_THE_MIDDLE_ATTACK", "OTHER_HACK", "OTHER_INVESTMENT_SCAM"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional. Scam category to use as filter.";
                };
                readonly chain: {
                    readonly enum: readonly ["BTC", "ETH", "TRON", "SOL", "POLYGON", "BINANCE", "HBAR", "CARDANO", "LITECOIN", "AVALANCHE", "MULTIVERSX", "ARBITRUM", "ALGORAND", "BASE", "TON"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "(Optional if a URL is passed). Chain to use as filter.";
                };
                readonly checked: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional\n- True: report checked by our team of moderators including blockchain intelligence experts.\n- False: report could not be verified by our team of moderators.";
                };
                readonly country: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional. An ISO 3166-1 alpha-2 code e.g. AE for United Arab Emirates, CA for Canada, GB for United Kingdom, etc.\n- Usage: ?country=CA to filter reports within Canada";
                };
                readonly domain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "(Optional if an address is passed). URL to screen.";
                };
                readonly includePrivate: {
                    readonly default: false;
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional. Defaults to false. Only users with TRM_INTERNAL role can toggle.\n- True: private reports are included in the response.\n- False: private reports are hidden from the response.";
                };
                readonly minLossAmount: {
                    readonly format: "double";
                    readonly type: "number";
                    readonly minimum: 0;
                    readonly maximum: 1.7976931348623157e+308;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional. Filters reports with at least the amount passed (Currently, only usd asset are supported and others will be ignored).";
                };
                readonly orderByDirection: {
                    readonly enum: readonly ["ASC", "DESC"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "- ASC = latest reports first\n- DESC= oldest report first if several reports are pulled out";
                };
                readonly orderByField: {
                    readonly type: "string";
                    readonly enum: readonly ["CREATED_AT", "SUBMITTED_BY"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Orders reports by date if several reports are pulled out";
                };
                readonly page: {
                    readonly default: 1;
                    readonly format: "double";
                    readonly type: "number";
                    readonly minimum: 1;
                    readonly maximum: 1.7976931348623157e+308;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional. Number of pages of reports to pull out. The maximum number of reports per page is 50. If page =1, you will pull out a maximum of 50 reports.";
                };
                readonly perPage: {
                    readonly default: 50;
                    readonly format: "double";
                    readonly type: "number";
                    readonly minimum: 1;
                    readonly maximum: 50;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional. Number of reports to display per page. The maximum number of reports per page is 50. If page =1, you will pull out a maximum of 50 reports.";
                };
                readonly scammerIoc: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional. Filters reports based on passed indicator of compromise.";
                };
                readonly since: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional. Start date to use as a filter.";
                };
                readonly trusted: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional\n- True: reported by a trusted contributor, based on how this Partner detects and verifies information.\n- False: the reporter is not registered as a trusted contributor. Please note this does not mean their report cannot be trusted.";
                };
                readonly username: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional. The contributor's username.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly items: {
                readonly properties: {
                    readonly evidences: {
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly type: "array";
                    };
                    readonly ips: {
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly type: "array";
                    };
                    readonly losses: {
                        readonly items: {
                            readonly properties: {
                                readonly amount: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly asset: {
                                    readonly type: "string";
                                    readonly enum: readonly ["OTHER", "BTC", "ETH", "TRON", "SOL", "POLYGON", "BINANCE", "HBAR", "CARDANO", "LITECOIN", "AVALANCHE", "MULTIVERSX", "ARBITRUM", "ALGORAND", "BASE", "TON", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UYW", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"];
                                    readonly description: "`OTHER` `BTC` `ETH` `TRON` `SOL` `POLYGON` `BINANCE` `HBAR` `CARDANO` `LITECOIN` `AVALANCHE` `MULTIVERSX` `ARBITRUM` `ALGORAND` `BASE` `TON` `AED` `AFN` `ALL` `AMD` `ANG` `AOA` `ARS` `AUD` `AWG` `AZN` `BAM` `BBD` `BDT` `BGN` `BHD` `BIF` `BMD` `BND` `BOB` `BOV` `BRL` `BSD` `BTN` `BWP` `BYN` `BZD` `CAD` `CDF` `CHE` `CHF` `CHW` `CLF` `CLP` `CNY` `COP` `COU` `CRC` `CUC` `CUP` `CVE` `CZK` `DJF` `DKK` `DOP` `DZD` `EGP` `ERN` `ETB` `EUR` `FJD` `FKP` `GBP` `GEL` `GHS` `GIP` `GMD` `GNF` `GTQ` `GYD` `HKD` `HNL` `HRK` `HTG` `HUF` `IDR` `ILS` `INR` `IQD` `IRR` `ISK` `JMD` `JOD` `JPY` `KES` `KGS` `KHR` `KMF` `KPW` `KRW` `KWD` `KYD` `KZT` `LAK` `LBP` `LKR` `LRD` `LSL` `LYD` `MAD` `MDL` `MGA` `MKD` `MMK` `MNT` `MOP` `MRU` `MUR` `MVR` `MWK` `MXN` `MXV` `MYR` `MZN` `NAD` `NGN` `NIO` `NOK` `NPR` `NZD` `OMR` `PAB` `PEN` `PGK` `PHP` `PKR` `PLN` `PYG` `QAR` `RON` `RSD` `RUB` `RWF` `SAR` `SBD` `SCR` `SDG` `SEK` `SGD` `SHP` `SLL` `SOS` `SRD` `SSP` `STN` `SVC` `SYP` `SZL` `THB` `TJS` `TMT` `TND` `TOP` `TRY` `TTD` `TWD` `TZS` `UAH` `UGX` `USD` `USN` `UYI` `UYU` `UYW` `UZS` `VES` `VND` `VUV` `WST` `XAF` `XAG` `XAU` `XBA` `XBB` `XBC` `XBD` `XCD` `XDR` `XOF` `XPD` `XPF` `XPT` `XSU` `XTS` `XUA` `XXX` `YER` `ZAR` `ZMW` `ZWL`";
                                };
                            };
                            readonly required: readonly ["amount", "asset"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly accusedScammers: {
                        readonly items: {
                            readonly properties: {
                                readonly info: {
                                    readonly items: {
                                        readonly properties: {
                                            readonly type: {
                                                readonly enum: readonly ["NAME", "EMAIL", "PHONE", "DISCORD", "TELEGRAM", "TWITTER", "INSTAGRAM", "GITHUB", "FACEBOOK", "WHATSAPP", "TIKTOK", "YOUTUBE", "OTHER"];
                                                readonly type: "string";
                                                readonly description: "`NAME` `EMAIL` `PHONE` `DISCORD` `TELEGRAM` `TWITTER` `INSTAGRAM` `GITHUB` `FACEBOOK` `WHATSAPP` `TIKTOK` `YOUTUBE` `OTHER`";
                                            };
                                            readonly contact: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly required: readonly ["type", "contact"];
                                        readonly type: "object";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly required: readonly ["info"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly descriptionMarkdown: {
                        readonly type: "string";
                    };
                    readonly addresses: {
                        readonly items: {
                            readonly properties: {
                                readonly domain: {
                                    readonly type: "string";
                                };
                                readonly chain: {
                                    readonly type: "string";
                                    readonly examples: readonly ["BTC"];
                                };
                                readonly address: {
                                    readonly type: "string";
                                    readonly examples: readonly ["12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y"];
                                };
                            };
                            readonly required: readonly ["domain", "address"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly description: {
                        readonly type: "string";
                    };
                    readonly createdAt: {
                        readonly type: "string";
                        readonly format: "date-time";
                        readonly examples: readonly ["2022-09-09T04:53:16.591Z"];
                    };
                    readonly scamCategory: {
                        readonly type: "string";
                        readonly examples: readonly ["RUG_PULL"];
                    };
                    readonly isPrivate: {
                        readonly type: "boolean";
                    };
                    readonly checked: {
                        readonly type: "boolean";
                        readonly examples: readonly [true];
                    };
                    readonly trusted: {
                        readonly type: "boolean";
                        readonly description: "Reported by a contributor registered as trusted on Chainabuse.";
                        readonly examples: readonly [true];
                    };
                    readonly id: {
                        readonly type: "string";
                        readonly description: "Report ID";
                        readonly examples: readonly ["52907745-7672-470e-a803-a2f8feb52944"];
                    };
                };
                readonly required: readonly ["addresses", "createdAt", "trusted", "id"];
                readonly type: "object";
            };
            readonly type: "array";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly reason: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["reason"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly reason: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["reason"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { CheckSanctionedAddress, CreateReports, Report, Reports };
