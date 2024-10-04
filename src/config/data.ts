import Prometheus from "../assets/icons/alert_Icons/prometheus-color.svg";
import Docker from "../assets/icons/alert_Icons/docker-color.svg";
import Windows from "../assets/icons/alert_Icons/windows.svg";
import VMware from "../assets/icons/alert_Icons/vmware-color.svg";
import Netdata from "../assets/icons/alert_Icons/netdata-color.svg";
import MySql from "../assets/icons/alert_Icons/mysql-color.svg";
import PostgreSQl from "../assets/icons/alert_Icons/postgresql-color.svg";
import Redis from "../assets/icons/alert_Icons/redis-color.svg";
import Mongodb from "../assets/icons/alert_Icons/mongodb-color.svg";
import RabbitMQ from "../assets/icons/alert_Icons/rabbitmq-color.svg";
import ESearch from "../assets/icons/alert_Icons/elasticsearch-color.svg";
import Meilisearch from "../assets/icons/alert_Icons/meilisearch-color.svg";
import Cassandra from "../assets/icons/alert_Icons/apachecassandra-color.svg";
import Clickhouse from "../assets/icons/alert_Icons/clickhouse-color.svg";
import Kafka from "../assets/icons/alert_Icons/apachekafka-color.svg";
import Pulsar from "../assets/icons/alert_Icons/apachepulsar-color.svg";
import Nats from "../assets/icons/alert_Icons/natsdotio-color.svg";
import Solr from "../assets/icons/alert_Icons/apachesolr-color.svg";
import Hadoop from "../assets/icons/alert_Icons/apachehadoop-color.svg";
import nginx from "../assets/icons/alert_Icons/nginx-color.svg";
import apache from "../assets/icons/alert_Icons/apache-color.svg";
import php from "../assets/icons/alert_Icons/phpmyadmin-color.svg";
import sidekiq from "../assets/icons/alert_Icons/sidekiq-color.svg";
import Nomad from "../assets/icons/alert_Icons/nomad-color.svg";
import Kubernetes from "../assets/icons/alert_Icons/kubernetes-color.svg";
import etcd from "../assets/icons/alert_Icons/etcd-color.svg";
import Linkerd from "../assets/icons/alert_Icons/linkerd-color.svg";
import Istio from "../assets/icons/alert_Icons/istio-color.svg";
import Ceph from "../assets/icons/alert_Icons/ceph-color.svg";
import speedtest from "../assets/icons/alert_Icons/speedtest-color.svg";
import minio from "../assets/icons/alert_Icons/minio-color.svg";
import Juniper from "../assets/icons/alert_Icons/junipernetworks-color.svg";
import Hashicorp from "../assets/icons/alert_Icons/hashicorp-color.svg";
import cloudflare from "../assets/icons/alert_Icons/cloudflare-color.svg";
import thanos from "../assets/icons/alert_Icons/thanos-color.svg";
import Jenkins from "../assets/icons/alert_Icons/jenkins-color.svg";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    name: "Basic resource monitoring",
    rules: [
      {
        name: "Prometheus self-monitoring",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/prometheus-self-monitoring/embedded-exporter.yml",
        logo: Prometheus,
        totalRules: 28,
      },
      {
        name: "Host and hardware",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/host-and-hardware/node-exporter.yml",
        logo: "",
        totalRules: 38,
      },
      {
        name: "S.M.A.R.T Device Monitoring",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/s.m.a.r.t-device-monitoring/smartctl-exporter.yml",
        logo: "",
        totalRules: 5,
      },
      {
        name: "Docker containers",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/docker-containers/google-cadvisor.yml",
        logo: Docker,
        totalRules: 8,
      },
      {
        name: "Blackbox",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/blackbox/blackbox-exporter.yml",
        logo: "",
        totalRules: 9,
      },
      {
        name: "Windows Server",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/windows-server/windows-exporter.yml",
        logo: Windows,
        totalRules: 5,
      },
      {
        name: "VMware",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/vmware/pryorda-vmware-exporter.yml",
        logo: VMware,
        totalRules: 4,
      },
      {
        name: "Netdata",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/netdata/embedded-exporter.yml",
        logo: Netdata,
        totalRules: 9,
      },
    ],
  },
  {
    name: "Databases and brokers",
    rules: [
      {
        name: "MySQL",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/mysql/mysqld-exporter.yml",
        logo: MySql,
        totalRules: 10,
      },
      {
        name: "PostgreSQL",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/postgresql/postgres-exporter.yml",
        logo: PostgreSQl,
        totalRules: 21,
      },
      {
        name: "SQL Server",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/sql-server/ozarklake-mssql-exporter.yml",
        logo: "",
        totalRules: 2,
      },
      {
        name: "Patroni",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/patroni/embedded-exporter-patroni.yml",
        logo: "",
        totalRules: 1,
      },
      {
        name: "PGBouncer",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/pgbouncer/spreaker-pgbouncer-exporter.yml",
        logo: "",
        totalRules: 3,
      },
      {
        name: "Redis",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/redis/oliver006-redis-exporter.yml",
        logo: Redis,
        totalRules: 12,
      },
      {
        name: "MongoDB",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/mongodb/percona-mongodb-exporter.yml",
        logo: Mongodb,
        totalRules: 7,
      },
      {
        name: "RabbitMQ",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/rabbitmq/rabbitmq-exporter.yml",
        logo: RabbitMQ,
        totalRules: 9,
      },
      {
        name: "Elasticsearch",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/elasticsearch/prometheus-community-elasticsearch-exporter.yml",
        logo: ESearch,
        totalRules: 19,
      },
      {
        name: "Meilisearch",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/meilisearch/embedded-exporter.yml",
        logo: Meilisearch,
        totalRules: 2,
      },
      {
        name: "Cassandra",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/cassandra/instaclustr-cassandra-exporter.yml",
        logo: Cassandra,
        totalRules: 12,
      },
      {
        name: "Clickhouse",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/clickhouse/embedded-exporter.yml",
        logo: Clickhouse,
        totalRules: 12,
      },
      {
        name: "Zookeeper",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/zookeeper/dabealu-zookeeper-exporter.yml",
        logo: "",
        totalRules: 4,
      },
      {
        name: "Kafka",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/kafka/danielqsj-kafka-exporter.yml",
        logo: Kafka,
        totalRules: 2,
      },
      {
        name: "Pulsar",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/pulsar/embedded-exporter.yml",
        logo: Pulsar,
        totalRules: 10,
      },
      {
        name: "Nats",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/nats/nats-exporter.yml",
        logo: Nats,
        totalRules: 20,
      },
      {
        name: "Solr",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/solr/embedded-exporter.yml",
        logo: Solr,
        totalRules: 4,
      },
      {
        name: "Hadoop",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/hadoop/jmx_exporter.yml",
        logo: Hadoop,
        totalRules: 10,
      },
    ],
  },
  {
    name: "Reverse proxies and load balancers",
    rules: [
      {
        name: "Nginx",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/nginx/knyar-nginx-exporter.yml",
        logo: nginx,
        totalRules: 3,
      },
      {
        name: "Apache",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/apache/lusitaniae-apache-exporter.yml",
        logo: apache,
        totalRules: 3,
      },
      {
        name: "HaProxy",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/haproxy/embedded-exporter-v2.yml",
        logo: "",
        totalRules: 14,
      },
      {
        name: "Traefik",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/traefik/embedded-exporter-v2.yml",
        logo: "",
        totalRules: 3,
      },
    ],
  },
  {
    name: "Runtimes",
    rules: [
      {
        name: "PHP-FPM",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/php-fpm/bakins-fpm-exporter.yml",
        logo: php,
        totalRules: 1,
      },
      {
        name: "JVM",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/jvm/jvm-exporter.yml",
        logo: "",
        totalRules: 1,
      },
      {
        name: "Sidekiq",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/sidekiq/strech-sidekiq-exporter.yml",
        logo: sidekiq,
        totalRules: 2,
      },
    ],
  },
  {
    name: "Orchestrators",
    rules: [
      {
        name: "Kubernetes",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/kubernetes/kubestate-exporter.yml",
        logo: Kubernetes,
        totalRules: 32,
      },
      {
        name: "Nomad",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/nomad/embedded-exporter.yml",
        logo: Nomad,
        totalRules: 4,
      },
      {
        name: "Consul",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/consul/consul-exporter.yml",
        logo: "",
        totalRules: 3,
      },
      {
        name: "Etcd",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/etcd/embedded-exporter.yml",
        logo: etcd,
        totalRules: 13,
      },
      {
        name: "Linkerd",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/linkerd/embedded-exporter.yml",
        logo: Linkerd,
        totalRules: 1,
      },
      {
        name: "Istio",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/istio/embedded-exporter.yml",
        logo: Istio,
        totalRules: 10,
      },
      {
        name: "ArgoCD",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/argocd/embedded-exporter.yml",
        logo: "",
        totalRules: 2,
      },
    ],
  },
  {
    name: "Network, security and storage",
    rules: [
      {
        name: "Ceph",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/ceph/embedded-exporter.yml",
        logo: Ceph,
        totalRules: 13,
      },
      {
        name: "SpeedTest",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/speedtest/nlamirault-speedtest-exporter.yml",
        logo: speedtest,
        totalRules: 2,
      },
      {
        name: "ZFS",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/zfs/node-exporter.yml",
        logo: "",
        totalRules: 1,
      },
      {
        name: "OpenEBS",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/openebs/embedded-exporter.yml",
        logo: "",
        totalRules: 1,
      },
      {
        name: "Minio",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/minio/embedded-exporter.yml",
        logo: minio,
        totalRules: 3,
      },
      {
        name: "SSL/TLS",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/ssl/tls/ribbybibby-ssl-exporter.yml",
        logo: "",
        totalRules: 4,
      },
      {
        name: "Juniper",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/juniper/czerwonk-junos-exporter.yml",
        logo: Juniper,
        totalRules: 3,
      },
      {
        name: "CoreDNS",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/coredns/embedded-exporter.yml",
        logo: "",
        totalRules: 1,
      },
      {
        name: "Freeswitch",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/freeswitch/znerol-freeswitch-exporter.yml",
        logo: "",
        totalRules: 3,
      },
      {
        name: "Hashicorp Vault",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/hashicorp-vault/embedded-exporter.yml",
        logo: Hashicorp,
        totalRules: 4,
      },
      {
        name: "Cloudflare",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/cloudflare/lablabs-cloudflare-exporter.yml",
        logo: cloudflare,
        totalRules: 2,
      },
    ],
  },
  {
    name: "Other",
    rules: [
      {
        name: "Thanos",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/thanos/thanos-compactor.yml",
        logo: thanos,
        totalRules: 5,
      },
      {
        name: "Loki",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/loki/embedded-exporter.yml",
        logo: "",
        totalRules: 4,
      },
      {
        name: "Promtail",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/promtail/embedded-exporter.yml",
        logo: "",
        totalRules: 2,
      },
      {
        name: "Cortex",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/cortex/embedded-exporter.yml",
        logo: "",
        totalRules: 6,
      },
      {
        name: "Jenkins",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/jenkins/metric-plugin.yml",
        logo: Jenkins,
        totalRules: 7,
      },
      {
        name: "APC UPS",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/apc-ups/apcupsd_exporter.yml",
        logo: "",
        totalRules: 6,
      },
      {
        name: "Graph Node",
        url: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/graph-node/embedded-exporter.yml",
        logo: "",
        totalRules: 6,
      },
    ],
  },
];
