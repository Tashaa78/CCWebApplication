//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CCWebApplicationDAL.SystemEntities
{
    using System;
    using System.Collections.Generic;
    
    public partial class zimcity
    {
        public int ID { get; set; }
        public Nullable<long> CITY_ID { get; set; }
        public string CITY_NAME { get; set; }
        public string PROVINCE { get; set; }
        public string DISTRICT { get; set; }
        public Nullable<long> POPULATION { get; set; }
        public Nullable<long> POPU_M { get; set; }
        public Nullable<long> POPU_F { get; set; }
        public Nullable<double> AREA { get; set; }
        public Nullable<double> PERIMETER { get; set; }
        public Nullable<long> PROV_CODE { get; set; }
        public System.Data.Entity.Spatial.DbGeometry geom { get; set; }
    }
}