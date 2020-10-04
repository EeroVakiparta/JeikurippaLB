import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'psql',
  connector: 'postgresql',
  url:
    'postgres://lgxdckodemclgk:460637e937d612e3a8fc9bb70b5e6024970fae3f0ad8deba3336116e956332b5@ec2-54-75-229-28.eu-west-1.compute.amazonaws.com:5432/d2i6avqln1s3ni',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '',
  database: 'jeikudb',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PsqlDataSource
  extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'psql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.psql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
