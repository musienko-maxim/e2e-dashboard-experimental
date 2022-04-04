/*********************************************************************
 * Copyright (c) 2019 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/


export const TestConstants = {
    /**
     * Base URL of the application which should be checked
     */
    BASE_URL:process.env.TS_BASE_URL || 'https://192.168.49.2.nip.io/dashboard/',

    /**
     * Run browser in "Headless" (hiden) mode, "false" by default.
     */
    TS_SELENIUM_HEADLESS: process.env.TS_SELENIUM_HEADLESS === 'true',

    /**
     * Browser width resolution, "1920" by default.
     */
    RESOLUTION_WIDTH: Number(process.env.TS_SELENIUM_RESOLUTION_WIDTH) || 1920,

    /**
     * Browser height resolution, "1080" by default.
     */
    RESOLUTION_HEIGHT: Number(process.env.TS_SELENIUM_RESOLUTION_HEIGHT) || 1080,

    /**
     * Username used to log in MultiUser Che.
     */
    USERNAME: process.env.TS_SELENIUM_USERNAME || 'che@eclipse.org',

     /**
     * Username used to log in MultiUser Che.
     */
    USER_PASSWORD: process.env.TS_SELENIUM_PASSWORD || 'admin',

    /**
     * Path to folder with load tests execution report.
     */
    TEST_REPORT_FOLDER: process.env.TS_SELENIUM_LOAD_TEST_REPORT_FOLDER || './test-report-folder',

    /**
     * login page dependents on infrastructure k8s or OpenShift
     */
    INFRASTRUCTURE: process.env.TS_INFRASTRUCTURE || 'k8s',

    /**
     * The selected item on a OpenShift Identity Provider Table
     */
    IDP_ITEM: process.env.TS_IDP_ITEM

}
