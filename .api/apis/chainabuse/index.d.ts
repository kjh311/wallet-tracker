import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Get Reports
     *
     * @throws FetchError<400, types.ReportsResponse400>
     * @throws FetchError<403, types.ReportsResponse403>
     */
    reports(metadata?: types.ReportsMetadataParam): Promise<FetchResponse<200, types.ReportsResponse200>>;
    /**
     * Get Single Report
     *
     * @throws FetchError<404, types.ReportResponse404>
     */
    report(metadata: types.ReportMetadataParam): Promise<FetchResponse<200, types.ReportResponse200>>;
    /**
     * Create one or more reports to alert the space on malicious addresses and/or domains.
     *
     * You can pass a markdown string for the `description` field. We support the following
     * subset of the [markdown language](https://spec.commonmark.org/0.30/):
     * - Normal text: `"text"`
     * - Bold: `"**bold text**"`
     * - Italic: `"*italicized text*"`
     * - Strikethrough: `"~~strikethrough text~~"`
     * - Normal heading: `"### heading\n"`
     * - Small heading: `"#### heading\n"`
     * - Bullet list: `"- item\n- second item\n"`
     * - Numbered list: `"1. item\n2. second item\n"`
     * - Links: `"[link text](https://example.com)"`
     *
     * @summary Contribute Reports
     * @throws FetchError<403, types.CreateReportsResponse403>
     * @throws FetchError<422, types.CreateReportsResponse422>
     */
    createReports(body: types.CreateReportsBodyParam): Promise<FetchResponse<201, types.CreateReportsResponse201>>;
    /**
     * Chainabuse is deprecating its Sanctions API. TRM provides a similar Sanctions API for
     * free, at the same speed. You can use it [here](http://docs.sanctions.trmlabs.com/). For
     * any questions please contact [hello@chainabuse.com](mailto:hello@chainabuse.com).
     *
     * @summary Check a Sanctioned Address
     * @throws FetchError<404, types.CheckSanctionedAddressResponse404>
     */
    checkSanctionedAddress(metadata: types.CheckSanctionedAddressMetadataParam): Promise<FetchResponse<200, types.CheckSanctionedAddressResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
