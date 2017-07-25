import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BlogRegionMySuffixModule } from './region/region-my-suffix.module';
import { BlogCountryMySuffixModule } from './country/country-my-suffix.module';
import { BlogLocationMySuffixModule } from './location/location-my-suffix.module';
import { BlogDepartmentMySuffixModule } from './department/department-my-suffix.module';
import { BlogTaskMySuffixModule } from './task/task-my-suffix.module';
import { BlogEmployeeMySuffixModule } from './employee/employee-my-suffix.module';
import { BlogJobMySuffixModule } from './job/job-my-suffix.module';
import { BlogJobHistoryMySuffixModule } from './job-history/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BlogRegionMySuffixModule,
        BlogCountryMySuffixModule,
        BlogLocationMySuffixModule,
        BlogDepartmentMySuffixModule,
        BlogTaskMySuffixModule,
        BlogEmployeeMySuffixModule,
        BlogJobMySuffixModule,
        BlogJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogEntityModule {}
