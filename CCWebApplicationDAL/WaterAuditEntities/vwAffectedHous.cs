//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CCWebApplicationDAL.WaterAuditEntities
{
    using System;
    using System.Collections.Generic;
    
    public partial class vwAffectedHous
    {
        public int id { get; set; }
        public int id_i { get; set; }
        public string startvalveid { get; set; }
        public string endvalveid { get; set; }
        public string pipeid { get; set; }
        public string standid { get; set; }
        public Nullable<long> cityid { get; set; }
        public Nullable<long> townshipid { get; set; }
        public string standtype { get; set; }
        public System.Data.Entity.Spatial.DbGeometry geom { get; set; }
    }
}