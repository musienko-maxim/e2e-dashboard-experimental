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
     * base URL of the application which should be checked
     */
    BASE_URL: process.env.BASE_URL || 'https://che-dogfooding.apps.che-dev.x6e0.p1.openshiftapps.com/dashboard/',

    /**
     * run browser in "Headless" (hiden) mode, "false" by default.
     */
    HEADLESS: process.env.HEADLESS || 'true',

    /**
     * Browser width resolution, "1920" by default.
     */
    RESOLUTION_WIDTH: Number(process.env.RESOLUTION_WIDTH) || 1920,

    /**
     * browser height resolution, "1080" by default.
     */
    RESOLUTION_HEIGHT: Number(process.env.RESOLUTION_HEIGHT) || 1080,

    /**
     * username used to log in MultiUser Che.
     */
    USERNAME: process.env.USERNAME || 'che@eclipse.org',

    /**
    * username used to log in MultiUser Che.
    */
    USER_PASSWORD: process.env.USER_PASSWORD || 'admin',

    /**
     * path to folder with load tests execution report.
     */
    TEST_REPORT_FOLDER: process.env.LOAD_TEST_REPORT_FOLDER || './test-report-folder',

    /**
     * login page dependents on platform k8s, OpenShift or SandBox
     */
    PLATFORM: process.env.PLATFORM || 'k8s',

    /**
     * the factory url for creating devworkspace which is used in the tests
     */
    FACTORY_URL: process.env.FACTORY_URL || 'https://raw.githubusercontent.com/che-samples/bash/devfilev2/devfile.yaml',

    /**
     * the selected item on a OpenShift Identity Provider Table
     */
    IDP_ITEM: process.env.IDP_ITEM || 'kube:admin',

    /**
     * user login which used for accesiing  to sandbox
     */
    GIT_HUB_LOGIN: process.env.GIT_HUB_LOGIN || 'user',

    /**
     * user password which used for accesiing  to sandbox
     */
     GIT_HUB_PASSWORD: process.env.GIT_HUB_PASSWORD || 'password'
}
